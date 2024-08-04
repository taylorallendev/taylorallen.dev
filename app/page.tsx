"use client";
import React from "react";
import { motion } from "framer-motion";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { DotBackground } from "@/components/DotBackground";
import { WorkExperience } from "@/components/WorkExperience";
import { Spotlight } from "@/components/ui/spotlight";
import { LampContainer } from "@/components/ui/lamp";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import ThemeToggle from "@/components/ThemeToggle";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import Image from "next/image";

const features = [
  {
    title: "Responsive Design",
    description: "Our layouts look great on any device, big or small.",
    icon: "📱",
  },
  {
    title: "Fast Performance",
    description: "Optimized for speed to keep your users engaged.",
    icon: "⚡",
  },
  {
    title: "Easy Customization",
    description: "Tailwind makes it easy to style your components.",
    icon: "🎨",
  },
  {
    title: "SEO Friendly",
    description: "Built with best practices for search engine optimization.",
    icon: "🔍",
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
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <DotBackground>
      <ThemeToggle />
      <TracingBeam>
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-64 "
          fill="white"
        />
        <div className="pt-32">
          <FloatingNav navItems={navItems} />
          <div className="relative z-10 px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
            {/* Hero Section */}
            <section className="flex flex-col items-center text-center mb-24 pt-24 h-screen">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl"
              >
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 text-foreground">
                  Hello! I&apos;m Taylor. 👋
                </h1>
                <h2 className="text-xl sm:text-xl md:text-2xl mb-4 font-semibold text-muted-foreground/70">
                  Welcome to my portfolio. Learn more about me below.
                </h2>
              </motion.div>
            </section>

            {/* Work Experience Section */}
            <section className="mb-24">
              {isDesktop ? (
                  <LampContainer className="h-[48rem] w-full -bottom-12">
                    <motion.h2
                        initial={{opacity: 0.5, y: 100}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{
                          delay: 0.3,
                          duration: 0.8,
                          ease: "easeInOut",
                        }}
                        className="bg-gradient-to-br from-card-foreground to-card-foreground/40 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl z-10"
                    >
                      Work Experience
                    </motion.h2>
                  </LampContainer>
              ) : (
                  <h2 className="text-center text-4xl font-medium tracking-tight text-foreground mb-8">
                    Work Experience
                  </h2>
              )}
                <motion.div
                  initial={{opacity: 0.5, y: 100}}
                          whileInView={{opacity: 1, y: 0}}
                          transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                          }}
                          className="w-full flex justify-center flex-col">
                  <WorkExperience className="h-auto md:h-96"/>
                </motion.div>
            </section>

            {/* Features Section */}
            {/*<section className="mb-24">*/}
            {/*  <h2 className="text-3xl font-heading mb-8 text-center text-foreground">*/}
            {/*    My Skills*/}
            {/*  </h2>*/}
            {/*  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">*/}
            {/*    {features.map((feature, index) => (*/}
            {/*        <motion.div*/}
            {/*            key={feature.title}*/}
            {/*        className="bg-card text-card-foreground p-6 rounded-lg border border-border"*/}
            {/*        initial={{ opacity: 0, y: 20 }}*/}
            {/*        animate={{ opacity: 1, y: 0 }}*/}
            {/*        transition={{ delay: index * 0.1, duration: 0.5 }}*/}
            {/*      >*/}
            {/*        <div className="text-4xl mb-4">{feature.icon}</div>*/}
            {/*        <h3 className="text-xl font-heading mb-2">*/}
            {/*          {feature.title}*/}
            {/*        </h3>*/}
            {/*        <p className="text-muted-foreground">*/}
            {/*          {feature.description}*/}
            {/*        </p>*/}
            {/*      </motion.div>*/}
            {/*    ))}*/}
            {/*  </div>*/}
            {/*</section>*/}

            {/* Music Section */}
            <section className="mt-24 mb-80 flex justify-center flex-col">
              <div >
                <motion.div
                    initial={{opacity: 0.5, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                      delay: 0.3,
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                    className="w-full flex justify-center flex-col"
                >
                  <h2 className="mb-12 bg-gradient-to-br from-card-foreground to-card-foreground/40 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl z-10">
                    Currently Listening To
                  </h2>
                  <div className="flex flex-col items-center text-center text-gray-900 mt-12">
                  <CardSpotlight className=" h-64 w-64 flex flex-col items-center justify-center">
                    <Image
                        src="/agc.jpg"
                        alt="A Great Chaos"
                        width={140}
                        height={140}
                        className="z-20 rounded-md"
                    />
                    <p className="text-xl text-center font-bold relative z-20 mt-4 text-white">
                      Green Room
                    </p>
                    <p className="text-neutral-300 text-center relative z-20 text-sm">
                      Ken Carson
                    </p>
                  </CardSpotlight>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Call to Action Section */}
            <section className="text-center mb-24">
              <h2 className="text-3xl font-heading mb-4 text-foreground">
                Ready to collaborate?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let&apos;s create something amazing together!
              </p>
              <button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-full transition duration-300">
                Start a Project
              </button>
            </section>
          </div>

          <footer className="py-8 text-center text-muted-foreground">
            <p>&copy; 2024 Taylor Allen. All rights reserved.</p>
          </footer>
        </div>
      </TracingBeam>
    </DotBackground>
  );
}
