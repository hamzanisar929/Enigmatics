import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
} from "../assets";

import HTMLAnimations from "../components/design/htmlAnimations";
import CSSAnimations from "../components/design/cssAnimations";
import JSAnimations from "../components/design/jsAnimations";
import REACTAnimations from "../components/design/reactAnimations";
import NODEAnimations from "../components/design/nodeAnimations";
import DBAnimations from "../components/design/dbAnimations";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Roadmap",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Projects",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const Services1 = ["HTML 5", "CSS 3", "Javascript", "React"];
export const Services2 = ["Express", "Node js", "Mongo DB"];
export const Services3 = ["Git & Github", "Postman", "Mongo Compass"];

export const ServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Built an AI model to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Currently building game-like elements, such as badges or leaderboards, to incentivize users to engage with the game more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Halasky",
    text: "Built an Airplane and Hotel Mannagement system with collaboration of the Halasky",
    date: "April 2024",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Creating over 56 APIs to integrate with the Enigmatics website for effective streaming and buffering in collaboration with nodejs buffers",
    date: "January 2024",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Students and interns can communicate effortlessly, share knowledge, and solve problems as a team.";

export const collabContent = [
  {
    id: "0",
    title: "Collaborative Learning",
    text: collabText,
  },
  {
    id: "1",
    title: "Progress Tracking",
  },
  {
    id: "2",
    title: "Smart Assistance & Automation",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Frontend",
    description: "Frontend Developement with Enigmatics.",
    price: "0",
    features: [
      "Personalized recommendations based on your preferences",
      "Coding projects for gaining experience",
      "Ability to track others progress and judge where you stand",
    ],
  },
  {
    id: "1",
    title: "Backend",
    description: "Backend Developement with Enigmatics.",
    price: "0",
    features: [
      "An advanced support program for any complex quereis",
      "An analytical group to track your progress",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Congratulations! you are now an employee of Enigmatics.",
    price: null,
    features: [
      "Job Oppurtunity",
      "Hands on Experience",
      "Grow in Cognitive Environment",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Master the MERN Stack",
    text: "Enhance your skills with expert-led training on MongoDB, Express, React, and Node.js.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    animation: HTMLAnimations,
  },
  {
    id: "1",
    title: "Level Up Every Day",
    text: "Gain hands-on experience with structured courses and mentorship. Improve your coding.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    animation: CSSAnimations,
  },
  {
    id: "2",
    title: "Connect & Collaborate",
    text: "Join a thriving community of developers. Engage in discussions and work on live projects.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    animation: JSAnimations,
  },
  {
    id: "3",
    title: "Build & Get Hired",
    text: "Prove your skills by working on assignments. Your performances will get you the opportunity to get hired by Enigmatics.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
    animation: REACTAnimations,
  },
  {
    id: "4",
    title: "Learn at Your Own Pace",
    text: "Access high-quality course videos anytime, anywhere. Follow a structured learning path that suits your schedule.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    animation: NODEAnimations,
  },
  {
    id: "5",
    title: "Stay Updated",
    text: "Keep up with the latest in web development, industry standards, and cutting-edge technologies to stay ahead in your career.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    animation: DBAnimations,
  },
];

const snippets = [
  {
    id: 1,
    title: "HTML",
    animation: HTMLAnimations,
    text: "HTML skeleton of the web, foundation of every webpage.",
    code: [
      { prefix: "1", content: "npm i daisyui", className: "" },
      { prefix: "2", content: "installing...", className: "" },
      {
        prefix: "3",
        content: "Error!",
        className: "bg-warning text-warning-content",
      },
    ],
  },
  {
    id: 2,
    title: "CSS",
    animation: CSSAnimations,
    text: "CSS the artist of the web, painting the canvas with colors,",
    light: true,
    code: [
      { prefix: "1", content: "npm install tailwindcss", className: "" },
      { prefix: "2", content: "npx tailwindcss init", className: "" },
      {
        prefix: "3",
        content: "Success!",
        className: "bg-success text-success-content",
      },
    ],
  },
  {
    id: 3,
    title: "JavaScript",
    animation: JSAnimations,
    text: "JavaScript the heartbeat of interactivity, revive the web",
    code: [
      { prefix: "1", content: "npx create-react-app ", className: "" },
      { prefix: "2", content: "cd my-app", className: "" },
      {
        prefix: "3",
        content: "npm start",
        className: "bg-info text-info-content",
      },
    ],
  },
  {
    id: 4,
    title: "React",
    animation: REACTAnimations,
    text: "React revolutionizes development with reusable components",
    light: true,
    code: [
      { prefix: "1", content: "git init", className: "" },
      { prefix: "2", content: "git add .", className: "" },
      {
        prefix: "3",
        content: "git commit ",
        className: "bg-warning text-warning-content",
      },
    ],
  },
  {
    id: 5,
    title: "Node js",
    animation: NODEAnimations,
    text: "Node.js brings JavaScript to the server single-threadedly",
    code: [
      { prefix: "1", content: "npm init -y", className: "" },
      { prefix: "2", content: "npm install express", className: "" },
      {
        prefix: "3",
        content: "node app.js",
        className: "bg-success text-success-content",
      },
    ],
  },
  {
    id: 6,
    title: "Mongo DB",
    animation: DBAnimations,
    text: "MongoDB a flexible, NoSQL database designed for modern applications",
    code: [
      { prefix: "1", content: "npm install -g vercel", className: "" },
      { prefix: "2", content: "vercel", className: "" },
      {
        prefix: "3",
        content: "Deployed!",
        className: "bg-info text-info-content",
      },
    ],
  },
];

export default snippets;

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
