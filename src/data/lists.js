import certificate from "../assets/icons/ui/icon-certificate.svg";
import circleCheckmark from "../assets/icons/ui/icon-circle-checkmark.svg";
import codepen from "../assets/icons/ui/icon-codepen.svg";
import college from "../assets/icons/ui/icon-education.svg";
import email from "../assets/icons/ui/icon-email.svg";
import github from "../assets/icons/ui/icon-github.svg";
import linkedin from "../assets/icons/ui/icon-linkedin.svg";

export const certificates = {
  header: "Certificates",
  icon: certificate,
  listItems: [
    "Complete Full-Stack Web Development  Bootcamp - Angela Yu",
    "CSS Demystified - Kevin Powell",
    "JavaScript for Everyone - Piccalilli",
  ],
};

export const education = {
  header: "Certificates",
  icon: college,
  listItems: [
    "MS Occupational Health and Safety Engineering - NJIT",
    "BS Chemical  Engineering - NJIT",
  ],
};

export const skills = {
  development: {
    header: "Development",
    icon: circleCheckmark,
    listItems: ["Semantic HTML", "CSS", "JavaScript", "React", "Astro"],
  },
  design: {
    header: "Design",
    icon: circleCheckmark,
    listItems: ["Figma", "Penpot", "Affinity", "Canva"],
  },
  tools: {
    header: "Tools",
    icon: circleCheckmark,
    listItems: [
      "Git / GitHub",
      "Command Line",
      "Chrome Dev Tools",
      "Claude AI",
      "Copilot",
    ],
  },
  knowledge: {
    header: "Knowledge",
    icon: circleCheckmark,
    listItems: [
      "CSS Architecture",
      "Accessibility",
      "Responsive Design",
      "API Data Handling",
      "Components",
    ],
  },
};

export const socialLinks = [
  {
    name: "Email",
    icon: email,
    link: "matthewmiguel.dev@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/matthewmiguel/",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/MattJM1007",
  },
  {
    name: "Code Pen",
    icon: codepen,
    link: "https://codepen.io/MattJM1007/pens/showcase",
  },
];
