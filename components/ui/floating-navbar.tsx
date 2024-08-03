import React, { useState } from "react";
import {
    motion,
    useScroll,
    useMotionValueEvent
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
                                navItems,
                                className,
                            }: {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {
    const { scrollY } = useScroll();
    const [visible, setVisible] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > 150 && previous !== undefined && latest > previous) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    });

    return (
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -100 }}
            transition={{ duration: 0.3 }}
            className={cn(
                "fixed top-6 inset-x-0 mx-auto flex max-w-fit items-center justify-center space-x-6 rounded-full border border-transparent bg-white px-10 py-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:bg-black z-[5000]",
                className
            )}
        >
            {navItems.map((navItem, idx) => (
                <Link
                    key={`link-${idx}`}
                    href={navItem.link}
                    className={cn(
                        "relative flex items-center space-x-2 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300"
                    )}
                >
                    <span className="text-base font-medium">{navItem.name}</span>
                </Link>
            ))}
        </motion.div>
    );
};