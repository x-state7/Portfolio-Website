import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import Blog from "/src/assets/blog_18435825.png";

export const HERO_CONTENT = `I’m a digital explorer, crafting interactive experiences and unraveling data-driven insights with a mix of code, creativity, and curiosity. Whether it's building dynamic web apps, designing intelligent systems, or diving into the depths of machine learning, I thrive on pushing boundaries...`;

export const ABOUT_TEXT = `I am a dedicated and versatile developer with a passion for creating efficient and interactive web applications. With experience in React, Python,and machine learning, I enjoy exploring the intersection of data, AI, and web development. My journey started with a curiosity for how digital experiences shape user behavior, leading me to build projects like Sensei Prism(Ongoing), and video transcription tools. I thrive on learning new technologies, tackling challenging problems, and crafting seamless user experiences. Beyond coding, I constantly push my boundaries to think critically and act decisively.`;

export const EXPERIENCES = [
  {
    year: "2025 - Current",
    role: "Looking For work",
    company: "Whatever u want",
    description: `Developed and maintained a continuos state of lazyness with a little bit of worry(as parents sending Pocket Money), but now water has gone too far, Give me urgent paid work and i'll make sure u wont regret it(maybe)`,
    technologies: ["Sleeping 12 hr", "Awaking 24hr straight", "Underweight", "confusing"],
  },
  {
    year: "2024(July)-2024(Sept)",
    role: "Internship Trainee",
    company: "QJ Spiders",
    description: `Gained hands-on experience with HTML, CSS, JavaScript, and modern frameworks, enabling me to build responsive and interactive web applications.
    Learned key testing techniques, including manual and automated testing, focusing on quality assurance, bug identification, and test case execution.`,
    technologies: ["Javascript", "HTML", "CSS", "SDLC"],
  },
  {
    year: "2024(July)-2024(Aug)",
    role: "Data Analyst",
    company: "IBM",
    description: `  Attended comprehensive sessions on advanced data analysis techniques, learning from industry experts.
    Successfully completed an online Data Analytics course at CSR Box.Conducted a data analysis project, applying the skills and techniques learned to solve real-world problems and derive actionable insights.`,
    technologies: ["Python", "PowerBi", "Tableau"],
  },
];

// export const PROJECTS = [
//   {
//     title: 'Podcastr - AI Podcast Platform',
//     image: project1,
//     description:
//       "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
//     technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
//   },
//   {
//     title: "Task Management App",
//     image: project2,
//     description:
//       "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
//     technologies: ["HTML", "CSS", "Angular", "Firebase"],
//   },
//   {
//     title: "Portfolio Website",
//     image: project3,
//     description:
//       "A personal portfolio website showcasing projects, skills, and contact information.",
//     technologies: ["HTML", "CSS", "React", "Bootstrap"],
//   },
//   {
//     title: "Blogging Platform",
//     image: project4,
//     description:
//       "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
//     technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
//   },
// ];
export const PROJECTS = [
  {
    title: 'Blog Website With News',
    desc: 'It is a dynamic blog and news platform designed for seamless content creation and discovery. Users can write and save personal blogs directly to their local storage, ensuring easy access without requiring an account. The platform also integrates live news updates, allowing users to stay informed with the latest headlines. Additionally, a bookmark feature enables users to save and revisit important news articles.',
    subdesc:
      '',
    href: 'https://blogs-with-news.vercel.app/',
    texture: '/textures/project/project1.mp4',
    logo: 'src/assets/blogger.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/src/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: 'src/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'src/assets/tailwindcss.png',
      },
    ],
  },

  {
    title: 'House Price Prediction',
    desc: 'This project is based on the California Housing Prices dataset, as explored in the book Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow by Aurélien Géron. The goal is to build a machine learning model that predicts house prices based on various features such as location, number of rooms, median income, and population density.',
    subdesc:
      '',
    href: 'https://github.com/x-state7/HandsOnMachineLearning-book/blob/main/House_price.ipynb',
    texture: '/textures/project/project2.mp4',
    logo: 'src/assets/house.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: 'src/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: 'src/assets/Google_Colaboratory_SVG_Logo.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'src/assets/scikit-learn.png',
      },
    ],
  },
  {
    title: 'Email Spam Classifier',
    desc: 'The Email Spam Classifier is a machine learning project that detects whether an email is spam or not using Scikit-Learn. It utilizes natural language processing (NLP) techniques to analyze email text and classify it as either "spam" (unwanted email) or "ham" (legitimate email).',
    subdesc:
      '',
    href: 'https://github.com/x-state7/Spam-Classifier/blob/main/mail.py',
    texture: '/textures/project/project3.mp4',
    logo: 'src/assets/emailPart2.svg',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: 'src/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: 'src/assets/Google_Colaboratory_SVG_Logo.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'src/assets/scikit-learn.png',
      },
    ],
  },

];


export const CONTACT = {
  address: "Meerut, U.P, India ",
  phoneNo: "+91 7983113720",
  email: "chaudharyhemantkumar030@gmail.com",
};


export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];
