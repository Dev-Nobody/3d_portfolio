import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  arid,
  ks,
  rev9,
  carrent,
  jobit,
  tripguide,
  threejs,
  flutter,
  portfolio,
  shoelab,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Flutter Developer",
    company_name: "Arid University",
    icon: arid, // Replace with actual icon import
    iconBg: "#E6DEDD",
    date: "2021 - 2025",
    points: [
      "Learned Flutter for cross-platform mobile app development, gaining proficiency in Dart and UI frameworks.",
      "Studied C# and .NET basics, building foundational knowledge in object-oriented programming.",
      "Worked on academic projects, applying software development principles in real-world scenarios.",
      "Gained hands-on experience with MySQL and database management.",
    ],
  },
  {
    title: "MERN Stack Trainee",
    company_name: "Knowledge Streams",
    icon: ks, // Replace with actual icon import
    iconBg: "#383E56",
    date: "Oct 2024 - Dec 2024",
    points: [
      "Developed and optimized backend applications using Node.js and Express.js, increasing backend proficiency by 30%.",
      "Used PostgreSQL instead of MongoDB, improving understanding of relational databases and SQL queries.",
      "Implemented GitHub version control for collaboration and project management.",
      "Enhanced frontend skills by developing dynamic and responsive interfaces with React.js.",
      "Achieved a 20% performance improvement in applications through optimization techniques and efficient database queries.",
      "Collaborated with mentors to troubleshoot issues, reducing development errors by 15%.",
    ],
  },
  {
    title: "Backend Developer(Nest Js)",
    company_name: "Rev9",
    icon: rev9, // Replace with actual icon import
    iconBg: "#E6DEDD",
    date: "Present",
    points: [
      "Developing and integrating APIs using NestJS for scalable and high-performance backend solutions.",
      "Working with Next.js for frontend development, optimizing SSR and static site generation.",
      "Implementing secure and efficient database queries using PostgreSQL and Sequelize.",
      "Handling API integrations for seamless communication between frontend and backend services.",
      "Collaborating with cross-functional teams to improve development workflows and optimize performance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      "A personal portfolio website showcasing my skills, projects, and experiences. Built with React and Tailwind for a modern and responsive design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
    ],
    image: portfolio, // Replace with actual image import
    source_code_link: "https://github.com/Dev-Nobody/3d_portfolio", // Add your GitHub repo link
  },
  {
    name: "ShoeLab",
    description:
      "A Flutter-based mobile app that allows users to customize shoes, try them on virtually, add them to the cart, and manage sizes. Integrated with Firebase and ASP.NET backend.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "cloudinary",
        color: "pink-text-gradient",
      },
    ],
    image: shoelab, // Replace with actual image import
    source_code_link: "https://github.com/Dev-Nobody/ShoeLab", // Add your GitHub repo link
  },
];

export { services, technologies, experiences, testimonials, projects };
