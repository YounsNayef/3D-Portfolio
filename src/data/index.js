import {
  algorithms,
  devnotes,
  oscs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "freelancer",
    company_name: "Self Employed",
    date: "2019 - Present",
    details: [
      "As a passionate and skilled freelance web developer, I specialize in creating dynamic, responsive, and user-friendly websites that help businesses establish a strong online presence. With expertise in HTML, CSS, JavaScript, and various modern frameworks like React, Angular, and Vue.js, I ensure that every project is not only visually appealing but also highly functional.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "meta",
    date: "2023",
    details: [
      "I am committed to delivering high-quality work, meeting deadlines, and providing excellent communication throughout the project. In 2023, I earned a prestigious web development certification from Meta, further validating my expertise and commitment to staying at the forefront of industry standards.",
    ],
  },
  
  
];

const portfolio = [
  {
    name: "Admin Dashboard",
    description:
      "Developed a responsive and intuitive admin dashboard using React, designed to enhance user experience with a toggleable dark mode. This project showcases a modern, functional interface tailored for managing and visualizing data efficiently.",
    image: oscs,
  },
  {
    name: "Apple Website Clone",
    description:
      "Developed a pixel-perfect clone of the Apple website, showcasing a deep understanding of modern web development practices and attention to design detail. This project highlights my ability to create a visually appealing and highly functional web application.",
    image: devnotes,
  },
  {
    name: "Meeting Platform UI",
    description:
      "As a dedicated UI/UX designer specializing in meeting platform interfaces, I craft intuitive and engaging user experiences that streamline communication and collaboration. With a deep understanding of user behavior and modern design principles, I create interfaces that are both visually appealing and highly functional.",
    image: algorithms,
  },
];

export { experiences, portfolio };

