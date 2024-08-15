import multiStepFormImage from "../../../assets/images/Multi-Step-Form.png";
import restCountriesApiImage from "../../../assets/images/Rest-Countries-API-light.png";
import todoImage from "../../../assets/images/To-Do.png";
import ageCalcAge from "../../../assets/images/Age-Calculator.png";
import weatherApp from "../../../assets/images/weather-app.png";
import reactImage from "../../../assets/images/React.png";
import tailwindImage from "../../../assets/images/Tailwind CSS.png";
import typScriptImage from "../../../assets/images/TypeScript.png";
import htmlImage from "../../../assets/images/HTML5.png";
import cssImage from "../../../assets/images/CSS3.png";
import jsImage from "../../../assets/images/JavaScript.png";

export const projects = [
  {
    id: 1,
    image: multiStepFormImage,
    title: "Multi Step Form",
    description:
      "This project is a multi-step form built with React and Tailwind CSS. The form allows users to navigate through different steps, select a pricing plan, choose add-ons, and view a summary of their selections before submission.",
    techs: [
      {
        techName: "React",
        techImage: reactImage,
      },
      {
        techName: "TailwindCSS",
        techImage: tailwindImage,
      },
      {
        techName: "TypeScript",
        techImage: typScriptImage,
      },
      {
        techName: "Framer Motion",
        techImage:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
      },
      {
        techName: "DaisyUI",
        techImage:
          "https://img.daisyui.com/images/daisyui-logo/daisyui-logomark-1024-1024.png",
      },
    ],
    previewLink: "https://multi-step-form-3.netlify.app/",
    codeLink: "https://github.com/Mahmoud-ElAgamy/Multi-Step-Form",
  },
  {
    id: 2,
    image: restCountriesApiImage,
    title: "Rest Countries API",
    description:
      "A comprehensive React application showcasing world countries with interactive features and stunning visuals. Built with TypeScript for type safety, Tailwind CSS for rapid UI development, and Framer Motion for dynamic animations.",
    techs: [
      {
        techName: "React",
        techImage: reactImage,
      },
      {
        techName: "TailwindCSS",
        techImage: tailwindImage,
      },
      {
        techName: "TypeScript",
        techImage: typScriptImage,
      },
    ],

    previewLink: "https://rest-countries-api-app2.netlify.app/",
    codeLink: "https://github.com/Mahmoud-ElAgamy/Rest-Countries-API",
  },
  {
    id: 3,
    image: todoImage,
    title: "To-Do App",
    description:
      "A task management app built with React and TypeScript, featuring drag-and-drop functionality and dark mode.",
    techs: [
      {
        techName: "React",
        techImage: reactImage,
      },
      {
        techName: "TailwindCSS",
        techImage: tailwindImage,
      },
      {
        techName: "TypeScript",
        techImage: typScriptImage,
      },
      {
        techName: "Framer Motion",
        techImage:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
      },
    ],

    previewLink: "https://react-do-app.netlify.app/",
    codeLink: "https://github.com/Mahmoud-ElAgamy/React-to-do-app",
  },

  {
    id: 4,
    image: ageCalcAge,
    title: "Age Calculator App",
    description:
      "This application allows you to know your current age by entering you date of birth.",
    techs: [
      {
        techName: "HTML",
        techImage: htmlImage,
      },
      {
        techName: "CSS",
        techImage: cssImage,
      },
      {
        techName: "JavaScript",
        techImage: jsImage,
      },
    ],

    previewLink: "https://mahmoud-elagamy.github.io/Age-calculator-app/",
    codeLink: "https://github.com/Mahmoud-ElAgamy/Age-calculator-app",
  },
  {
    id: 5,
    image: weatherApp,
    title: "Weather App",
    description:
      "A weather app created using HTML, CSS, and JavaScript is a web-based application that displays real-time weather information for a specific location.It provides users with up-to-date weather conditions, forecasts, and other relevant data.",
    techs: [
      {
        techName: "HTML",
        techImage: htmlImage,
      },
      {
        techName: "CSS",
        techImage: cssImage,
      },
      {
        techName: "JavaScript",
        techImage: jsImage,
      },
    ],

    previewLink: "https://mahmoud-elagamy.github.io/Weather-App/",
    codeLink: "https://github.com/Mahmoud-ElAgamy/Weather-App",
  },
];
