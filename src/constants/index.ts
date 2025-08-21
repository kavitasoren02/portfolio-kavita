import {
  web,
  mern,
  react,
  backend,
  bcaIcon,
  mcaIcon,
  css,
  docker,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reacts,
  redux,
  tailwind,
  typescript,
  project1,
  project2,
  project3,
  project4
} from "../assets";

export interface Navlink {
  id: string;
  title: string;
}

export interface ServiceLink {
  title: string;
  icon: string;
}

export interface AcademicsLink {
  title: string;
  institution: string;
  icon?: string;
  iconBg?: string;
  year: string;
  points: string[];
}

export interface TechLink {
  name: string;
  icon: string;
}

export interface ProjectLink {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link: string;
}

export interface StarProps {
  color?: string,
  count?: number,
  radius?: number,
}

export interface ContactProps {
  name: string,
  email: string,
  message: string,
}

export const navLinks: Navlink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "academics",
    title: "Academics",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contacts",
    title: "Contacts",
  },
];

export const serviceLinks: ServiceLink[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "MERN-Stack Developer",
    icon: mern,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "ReactJS Developer",
    icon: react,
  },
];

export const academicsLink: AcademicsLink[] = [
  {
    title: "Master of Computer Application (MCA)",
    institution: "Cambridge Institute of Technology",
    icon: mcaIcon,
    iconBg: "#383e56",
    year: "2023- 2025",
    points: [
      "Silver Medalist in MCA, recognized among the top academic performers of the batch.",
      "Developed multiple mini-projects using React.js, MERN stack, Java, and core web technologies (HTML, CSS, JavaScript).",
      "Acquired practical exposure to software development processes such as project documentation, testing, and deployment.",
      "Strengthened collaboration skills by learning software engineering best practices, version control with Git/GitHub, and effective teamwork.",
    ],
  },
  {
    title: "Bachelor of Computer Application (BCA)",
    institution: "Jharkhand Rai University",
    icon: bcaIcon,
    iconBg: "#E6DEDD",
    year: "2019- 2022",
    points: [
      "Graduated BCA with 8.0 CGPA, maintaining consistent academic excellence.",
      "Completed core subjects such as C/C++, Java, Python, DBMS and Operating Systems.",
      "Built multiple mini-projects using Java, HTML, CSS to strengthen development skills.",
      "Developed strong analytical and problem-solving skills through coursework and practical projects.",
    ],
  },
];

export const techLink: TechLink[] = [

  {
    name: "ReactJS",
    icon: reacts,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
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
];

export const projectLink: ProjectLink[] = [
  {
    name: "Blog Vibe",
    description:
"This blog web application supports three roles: Admin (manages users and content), Author (writes and manages blogs), and User (reads, likes, and comments on posts). Built with React.js, Node.js, and MongoDB, it showcases role-based access, content management, and interactive features.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/kavitasoren02/BlogVibe",
  },
  {
    name: "Text-Utils",
    description:
      "Text-Utils is a versatile text manipulation tool built to enhance productivity. It allows users to perform various text operations like converting case (uppercase/lowercase), counting                characters and more. The application is user-friendly,efficient, and designed with a clean interface for seamless usage.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/kavitasoren02/textutil",
  },
  {
    name: "News App",
    description:
      " News API App is a React-based web application designed to fetchand display the latest news articles from various sources using a public News API. It serves as a platform for users to explore trending news, categorized headlines, and read detailed articles in a user-friendly interface.",
    tags: [
      {
        name: "news-api",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/kavitasoren02/news-api",
  },
    {
    name: "Book My Show",
    description:
    " A movie application built with React.js, offering users a platform to browse, search, and explore movies in detail.The app features dynamic listings,and detailed movie pages. Administrators can manage movie listings through a dedicated dashboard, allowing them to add, edit,movies effortlessly.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "restful-api",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/kavitasoren02/bookmyshowFrontend",
  },
];

export const starProps: StarProps = {
  color: "#f272c8",
  count: 5000,
  radius: 1.2
};

export const contactProps: ContactProps = {
  name: "",
  email: "",
  message: " ",
}