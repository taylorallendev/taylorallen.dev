'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FloatingNav } from "@/components/ui/floating-navbar";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { DotBackground } from "@/components/DotBackground";

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

export default function HomePage() {
    return (
        <DotBackground>
            <div className="relative">
                <FloatingNav navItems={navItems} />
                <TracingBeam>
                    <div className="relative z-10 px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
                        <section className="text-center mb-16">
                            <h1 className="text-5xl font-heading mb-4 text-foreground">
                                Welcome to My Portfolio
                            </h1>
                            <p className="text-xl text-muted-foreground">
                                Discover my projects and skills.
                            </p>
                            <button className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-4 rounded-full transition duration-300">
                                Get in Touch
                            </button>
                        </section>

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
        </DotBackground>
    );
}