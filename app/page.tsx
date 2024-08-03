'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FloatingNav } from "@/components/ui/floating-navbar";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";
import {useTheme} from "next-themes";
import {SunIcon, MoonIcon} from "lucide-react";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import('@/components/ThemeToggle'), { ssr: false });

const features = [
    {
        title: 'Responsive Design',
        description: 'Our layouts look great on any device, big or small.',
        icon: '📱',
    },
    {
        title: 'Fast Performance',
        description: 'Optimized for speed to keep your users engaged.',
        icon: '⚡',
    },
    {
        title: 'Easy Customization',
        description: 'Tailwind makes it easy to style your components.',
        icon: '🎨',
    },
    {
        title: 'SEO Friendly',
        description: 'Built with best practices for search engine optimization.',
        icon: '🔍',
    },
];

const navItems = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "About",
        link: "/about",
    },
    {
        name: "Contact",
        link: "/contact",
    },
];

const dummyContent = [
    {
        title: "Welcome to Our Next.js App",
        description: (
            <>
                <p>
                    Scroll down to see our floating navbar and tracing beam in action! Our app combines modern design with powerful features to deliver an exceptional user experience.
                </p>
                <p>
                    Built with Next.js and enhanced with smooth animations, our platform offers responsive layouts, fast performance, easy customization, and SEO-friendly structure.
                </p>
            </>
        ),
        badge: "Introduction",
        image: "https://plus.unsplash.com/premium_photo-1661342428515-5ca8cee4385a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

export default function Home() {
    return (
        <div className="relative min-h-screen bg-background text-foreground">
            <ThemeToggle />
            <FloatingNav navItems={navItems} />
            <TracingBeam className="px-6">
                <div className="max-w-4xl mx-auto antialiased pt-4 relative">
                    {dummyContent.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10">
                            <h2 className="bg-secondary text-secondary-foreground rounded-full text-sm w-fit px-4 py-1 mb-4">
                                {item.badge}
                            </h2>

                            <h1 className="text-4xl font-heading mb-4 text-foreground">
                                {item.title}
                            </h1>

                            <div className="text-xl prose prose-invert text-muted-foreground">
                                {item.image && (
                                    <div className="relative w-full h-[300px] mb-10">
                                        <Image
                                            src={item.image}
                                            alt="Content image"
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-lg"
                                        />
                                    </div>
                                )}
                                {item.description}
                            </div>
                        </div>
                    ))}

                    <section className="mb-20">
                        <h2 className="text-3xl font-heading mb-8 text-center text-foreground">
                            Our Features
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    className="bg-card text-card-foreground p-6 rounded-lg border border-border"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                >
                                    <div className="text-4xl mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-heading mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    <section className="text-center mb-20">
                        <h2 className="text-3xl font-heading mb-4 text-foreground">Ready to get started?</h2>
                        <p className="text-xl text-muted-foreground mb-8">Join us today and experience the difference!</p>
                        <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-4 rounded-full transition duration-300">
                            Sign Up Now
                        </button>
                    </section>
                </div>
            </TracingBeam>

            <footer className="mt-20 py-8 text-center text-muted-foreground">
                <p>&copy; 2024 Your Company Name. All rights reserved.</p>
            </footer>
        </div>
    );
}