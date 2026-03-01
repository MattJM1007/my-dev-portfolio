import contactDesktop from "../assets/images/projects/contact-desktop.webp";
import contactMobile from "../assets/images/projects/contact-mobile.webp";
import contactTablet from "../assets/images/projects/contact-tablet.webp";
import faqDesktop from "../assets/images/projects/faq-desktop.webp";
import faqTablet from "../assets/images/projects/faq-tablet.webp";
import passwordDesktop from "../assets/images/projects/password-desktop.webp";
import passwordMobile from "../assets/images/projects/password-mobile.webp";
import passwordTablet from "../assets/images/projects/password-tablet.webp";
import quizDesktop from "../assets/images/projects/quiz-desktop.webp";
import quizMobile from "../assets/images/projects/quiz-mobile.webp";
import quizTablet from "../assets/images/projects/quiz-tablet.webp";
import scootDesktop from "../assets/images/projects/scoot-desktop.webp";
import scootMobile from "../assets/images/projects/scoot-mobile.webp";
import scootTablet from "../assets/images/projects/scoot-tablet.webp";
import screenshotJacksonHeights from "../assets/images/projects/screenshot-jackson-heights.webp";
import screenshotLyndhurst from "../assets/images/projects/screenshot-lyndhurst.webp";
import weatherDesktop from "../assets/images/projects/weather-desktop.webp";
import weatherMobile from "../assets/images/projects/weather-mobile.webp";
import weatherTablet from "../assets/images/projects/weather-tablet.webp";

export const projects = [
  {
    featured: true,
    screenshots: [weatherDesktop, weatherTablet, weatherMobile],
    title: "Weather Now",
    tags: ["React", "React Hooks", "API Integration", "CSS Grid", "Keyboard Accessibility"],
    description:
      "Weather Now is a forecast app that lets users check current, hourly, and daily weather conditions for any location in the world. Built with React, it features geolocation on load, a searchable location dropdown with full keyboard accessibility, and unit toggling between imperial and metric. The responsive layout uses CSS Grid with named template areas to adapt across screen sizes. Data is sourced from the Open-Meteo API, Big Data Cloud API, and the native Geolocation API.",
    demoLink: "https://mattjm1007.github.io/weather-app/",
    codeLink: "https://github.com/MattJM1007/weather-app",
  },

  {
    featured: true,
    screenshots: [scootDesktop, scootTablet, scootMobile],
    title: "Scoot Multi-Page Site",
    tags: ["Semantic HTML", "Mobile Navigation", "Accessibility", "CSS Grid", "Flexbox"],
    description:
      "Scoot is a multi-page marketing website for a fictional scooter-sharing service. The site features four pages with complex responsive layouts using CSS Grid and Flexbox, reusable decorative patterns built with pseudo-elements and CSS counters, and a mobile navigation menu with proper ARIA state management. Semantic HTML and consistent component patterns are maintained across all pages.",
    demoLink: "https://mattjm1007.github.io/fem-scoot-challenge/",
    codeLink: "https://github.com/MattJM1007/fem-scoot-challenge",
  },

  {
    featured: true,
    screenshots: [contactDesktop, contactTablet, contactMobile],
    title: "React Contact Form",
    tags: ["React", "Constraint Validation API", "Error Handling", "Accessibility"],
    description:
      "A contact form component built with React featuring custom validation using the native Constraint Validation API. Errors display on blur and clear as the user types, providing immediate feedback without being intrusive. The form uses semantic HTML with proper ARIA attributes including aria-live regions for screen reader announcements and aria-describedby to connect inputs to their error messages. A toast notification confirms successful submission.",
    demoLink: "https://mattjm1007.github.io/react-contact-form-component/",
    codeLink: "https://github.com/MattJM1007/react-contact-form-component",
  },

  {
    featured: true,
    screenshots: [passwordDesktop, passwordTablet, passwordMobile],
    title: "Password Generator",
    tags: ["Advanced CSS Selectors", "Semantic HTML", "Form Handling", "JavaScript"],
    description:
      "A password generator that lets users customize length and character types to create secure passwords. The strength indicator uses minimal JavaScript to set a single class, with CSS :has() and sibling selectors handling all visual states from there. Form inputs are built with semantic HTML and custom-styled while maintaining full accessibility. Generated passwords can be copied to the clipboard with a single click.",
    demoLink: "https://mattjm1007.github.io/Password-Generator-App/",
    codeLink: "https://github.com/MattJM1007/Password-Generator-App",
  },

  {
    featured: true,
    screenshots: [quizDesktop, quizTablet, quizMobile],
    title: "Front End Quiz App",
    tags: ["Theme Switcher", "JavaScript", "Data-Driven UI", "Aysnc/Await"],
    description:
      "A quiz app that tests your knowledge across multiple frontend development topics. Quiz data is fetched asynchronously from a JSON file and used to dynamically populate questions, answer choices, and scoring. The theme switcher uses the CSS light-dark() function with custom properties and respects the user's system preference as a default. Progress is tracked throughout with a visual progress bar and a final score screen.",
    demoLink: "https://mattjm1007.github.io/Frontend-Quiz-App/",
    codeLink: "https://github.com/MattJM1007/Frontend-Quiz-App",
  },

  {
    featured: true,
    screenshots: [faqDesktop, faqTablet],
    title: "FAQ Accordian - CSS Only",
    tags: ["Semantic HTML", "CSS Only", "CSS Animations", "Interpolate-size"],
    description:
      "A FAQ accordion built entirely with HTML and CSS. The accordion uses native details and summary elements for open and close functionality, with smooth animations powered by the CSS interpolate-size property — no JavaScript required.",
    demoLink: "https://mattjm1007.github.io/faq-accordian/",
    codeLink: "https://github.com/MattJM1007/faq-accordian",
  },
];

export const community = [
  {
    title: "Lyndhurst Meditation",
    screenshot: screenshotLyndhurst,
    link: "https://lyndhurstmeditation.org",
  },

  {
    title: "Jackson Heights Meditation",
    screenshot: screenshotJacksonHeights,
    link: "https://jhmeditation.org",
  },
];
