// src/components/Skills.js

import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

const accordionItems = [
  {
    id: "panel1",
    title: (
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
        >
          <path
            fill="#0284c7"
            d="M5 12a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0v-8a1 1 0 0 0-1-1m5-10a1 1 0 0 0-1 1v18a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1m10 14a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1m-5-8a1 1 0 0 0-1 1v12a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1"
          />
        </svg>
        Languages
      </div>
    ),
    subtitle: "",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python (Pandas, NumPy, ETL Processes)",
    ],
  },
  {
    id: "panel2",
    title: (
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
        >
          <g fill="#0284c7">
            <path d="M4 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2" />
            <path
              fill-rule="evenodd"
              d="M3 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm18 2H3a1 1 0 0 0-1 1v3h20V6a1 1 0 0 0-1-1M2 18v-7h20v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1"
              clip-rule="evenodd"
            />
          </g>
        </svg>
        Front-End Development
      </div>
    ),
    subtitle: "Over 1 year of experience",
    skills: [
      "HTML5 & CSS3 & SCSS",
      "React",
      "Next.js",
      "TailwindCSS",
      "Bootstrap",
      "Material-UI",
      "PrimeReact",
      "Ant Design",
      "Styled-Components",
      "Webpack & Vite",
    ],
  },
  {
    id: "panel3",
    title: (
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
        >
          <path
            fill="#0284c7"
            d="M4 1h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m0 8h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m0 8h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1M9 5h1V3H9zm0 8h1v-2H9zm0 8h1v-2H9zM5 3v2h2V3zm0 8v2h2v-2zm0 8v2h2v-2z"
          />
        </svg>
        Back-End Development
      </div>
    ),
    subtitle: "",
    skills: [],
  },
  {
    id: "panel4",
    title: (
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
        >
          <path
            fill="#0284c7"
            d="M8 16.5a1 1 0 1 0 1 1a1 1 0 0 0-1-1M12 2C8 2 4 3.37 4 6v12c0 2.63 4 4 8 4s8-1.37 8-4V6c0-2.63-4-4-8-4m6 16c0 .71-2.28 2-6 2s-6-1.29-6-2v-3.27A13.16 13.16 0 0 0 12 16a13.16 13.16 0 0 0 6-1.27Zm0-6c0 .71-2.28 2-6 2s-6-1.29-6-2V8.73A13.16 13.16 0 0 0 12 10a13.16 13.16 0 0 0 6-1.27Zm-6-4C8.28 8 6 6.71 6 6s2.28-2 6-2s6 1.29 6 2s-2.28 2-6 2m-4 2.5a1 1 0 1 0 1 1a1 1 0 0 0-1-1"
          />
        </svg>
        Databases
      </div>
    ),
    subtitle: "",
    skills: ["Oracle SQL", "MySQL", "PostgreSQL", "SQL Server", "MongoDB"],
  },
  {
    id: "panel5",
    title: (
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
        >
          <path
            fill="#0284c7"
            d="M12 6a1 1 0 0 0-1 1v10a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1m-5 6a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1m10-2a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1m2-8H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"
          />
        </svg>
        Data Analytics
      </div>
    ),
    subtitle: "",
    skills: ["SSAS", "Microsoft Excel"],
  },
  {
    id: "panel6",
    title: (
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 16 16"
        >
          <path
            fill="#0284c7"
            d="M11.5 0h-7C3.675 0 3 .675 3 1.5v13c0 .825.675 1.5 1.5 1.5h7c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5M6 .75h4v.5H6zM8 15a1 1 0 1 1 0-2a1 1 0 0 1 0 2m4-3H4V2h8z"
          />
        </svg>
        Mobile Development
      </div>
    ),
    subtitle: "",
    skills: ["React Native"],
  },
  {
    id: "panel7",
    title: (
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
        >
          <path
            fill="#0284c7"
            d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9l-1.28 2.22l-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24l-1.3-2.21l.8-.9a3 3 0 0 0 0-4l-.8-.9l1.28-2.2l1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24l1.28 2.22l-.8.9a3 3 0 0 0 0 3.98m-6.77-6a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2"
          />
        </svg>
        CI/CD & Development Tools
      </div>
    ),
    subtitle: "",
    skills: [
      "Git",
      "Github Actions",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Vercel",
      "Heroku",
    ],
  },
  {
    id: "panel8",
    title: (
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
        >
          <path
            fill="#0284c7"
            d="M7.42 15.54a1 1 0 0 0 0 1.41a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.41a1 1 0 0 0-1.42 0m0-8.49a1 1 0 0 0 0 1.41a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.41a1 1 0 0 0-1.42 0m4.95 10a1 1 0 1 0 1 1a1 1 0 0 0-1-1.05Zm-6-6a1 1 0 1 0 1 1a1 1 0 0 0-1-1.05Zm6-6a1 1 0 1 0 1 1a1 1 0 0 0-1-1.05Zm3.54 2.05a1 1 0 1 0 1.41 0a1 1 0 0 0-1.41-.05Zm6.3 0a11 11 0 1 0-7.85 15.74a3.87 3.87 0 0 0 2.5-1.65a4.2 4.2 0 0 0 .61-3.19a5.7 5.7 0 0 1-.1-1a5 5 0 0 1 3-4.56a3.84 3.84 0 0 0 2.06-2.25a4 4 0 0 0-.22-3.11Zm-1.7 2.44a1.9 1.9 0 0 1-1 1.09A7 7 0 0 0 15.37 17a7.3 7.3 0 0 0 .14 1.4a2.16 2.16 0 0 1-.31 1.65a1.8 1.8 0 0 1-1.21.8a8.7 8.7 0 0 1-1.62.15a9 9 0 0 1-9-9.28A9.05 9.05 0 0 1 11.85 3h.51a9 9 0 0 1 8.06 5a2 2 0 0 1 .09 1.52ZM12.37 11a1 1 0 1 0 1 1a1 1 0 0 0-1-1"
          />
        </svg>
        UI/UX & Graphic Design
      </div>
    ),
    subtitle: "",
    skills: ["Figma"],
  },
];

export default function Skills() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Following are my skills and expertise that I have gained with hours
            and hours of hands-on practices.
          </p>
        </div>
        {/* <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div> */}
        {accordionItems.map(({ id, title, subtitle, skills }) => (
          <Accordion
            key={id}
            expanded={expanded === id}
            onChange={handleChange(id)}
            sx={{
              backgroundColor: "rgb(17 24 39)",
              color: "white",
              "& .MuiAccordionSummary-root": {
                backgroundColor: "rgb(17 24 39)",
                color: "white",
                "&:hover": {
                  backgroundColor: "rgb(17 24 39)",
                },
              },
              "& .MuiAccordionDetails-root": {
                backgroundColor: "rgb(17 24 39)",
                color: "white",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls={`${id}-content`}
              id={`${id}-header`}
            >
              <Typography
                component="span"
                sx={{ width: "50%", flexShrink: 0, fontWeight: "bold" }}
              >
                {title}
              </Typography>
              <Typography component="span" sx={{ color: "white" }}>
                {subtitle}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                {skills.map((skill) => (
                  <div key={skill} className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                      <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                      <span className="title-font font-medium text-white">
                        {skill}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
}
