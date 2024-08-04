import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type WorkExperience = {
  company: string;
  logo: string;
  title: string;
  date: string;
  location: string;
  achievements: string[];
  color: string;
};

export const WorkExperience: React.FC<{ className?: string }> = ({
  className,
}) => {
  const [activeCompany, setActiveCompany] = useState<string>(
    experiences[0].company
  );

  return (
    <div
      className={cn(
        "text-white flex justify-center p-4 md:p-8 rounded-lg",
        className
      )}
    >
      <div className="flex flex-col md:flex-row w-full max-w-4xl">
        <div className="flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2 w-full md:w-48 overflow-x-auto md:overflow-x-visible mb-6 md:mb-0">
          {experiences.map((exp) => (
            <button
              key={exp.company}
              onClick={() => setActiveCompany(exp.company)}
              className={cn(
                "px-3 md:px-4 py-2 text-sm rounded-lg transition-colors text-left flex items-center space-x-2 flex-shrink-0",
                activeCompany === exp.company
                  ? `bg-card text-white`
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              )}
              style={{
                borderLeft:
                  activeCompany === exp.company
                    ? `4px solid ${exp.color}`
                    : "none",
              }}
            >
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="w-6 h-6 rounded"
              />
              <span className="hidden md:inline">{exp.company}</span>
            </button>
          ))}
        </div>
        <div className="flex-1 md:pl-8 h-[400px] md:h-auto overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCompany}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="h-full w-full"
            >
              {experiences.find((exp) => exp.company === activeCompany) && (
                <ExperienceContent
                  experience={
                    experiences.find((exp) => exp.company === activeCompany)!
                  }
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const ExperienceContent: React.FC<{ experience: WorkExperience }> = ({
  experience,
}) => {
  return (
    <div className="h-full flex flex-col overflow-y-auto">
      <div>
        <h2 className="font-bold mb-1 text-lg md:text-xl">
          <span className="text-foreground">{experience.title} @</span>{" "}
          <span style={{ color: experience.color }}>{experience.company}</span>
        </h2>
        <p className="text-muted-foreground text-xs md:text-sm">
          {experience.date}
        </p>
        <p className="text-muted-foreground mb-4 text-xs md:text-sm">
          {experience.location}
        </p>
      </div>
      <ul className="space-y-2 flex-grow text-sm md:text-base">
        {experience.achievements.map((achievement, index) => (
          <li key={index} className="flex items-start">
            <span
              style={{ color: experience.color }}
              className="mr-2 flex-shrink-0"
            >
              ✓
            </span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const experiences: WorkExperience[] = [
  {
    company: "Stanford Healthcare",
    logo: "/logos/shc.png",
    title: "Solutions Architect",
    date: "March 2024 - Present",
    location: "Palo Alto, CA",
    color: "#8C1515",
    achievements: [
      "Led the design and implementation of a new patient management system, improving efficiency by 30%",
      "Collaborated with cross-functional teams to integrate AI-driven diagnostic tools, reducing misdiagnosis rates by 15%",
      "Orchestrated the migration of legacy systems to cloud infrastructure, enhancing data security and accessibility",
    ],
  },
  {
    company: "Relyion Energy",
    logo: "/logos/relyion-energy.png",
    title: "Software Engineer Intern",
    date: "April 2022 - July 2022",
    location: "Santa Clara, CA",
    color: "#39adbf",
    achievements: [
      "Shipped website redesign in NextJS working closely with CTO",
      "Designed and developed Relyion's mobile Bluetooth application to oversee, manage, and monitor large battery systems",
    ],
  },
  {
    company: "Poppin",
    logo: "/logos/poppin.png",
    title: "Co-Founder + Ex-CTO",
    date: "May 2021 - Feb 2022",
    location: "Remote",
    color: "#C137FB",
    achievements: [
      "Led small startup from 0 to 500k PearVC investment (Doordash)",
      "Successfully led and supervised a development team to several ambitious deadlines",
      "Fully architected/designed API servicing mobile and web clients",
      "Developed and shipped full MVP in conjunction with product managers and designers",
    ],
  },
];

export default WorkExperience;
