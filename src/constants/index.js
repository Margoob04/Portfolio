export const myProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Facilitates purchases from international websites like Amazon and eBay, allowing customers to shop from these sites and have products delivered domestically.",
    subDescription: [
      "Built a scalable application with React.js, integrating global platforms like Amazon for domestic delivery.",
      "Implemented secure authentication and database management.",
      "Designed a responsive frontend with Tailwind CSS, enhancing user experience.",
      "Added payment systems, localization, and product filtering for functionality improvements.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/accessories.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 2,
    title: "Authentication & Authorization System",
    description:
      "A secure authentication and authorization system for seamless user management.",
    subDescription: [
      "Developed custom authentication flow with JWT and role-based access control.",
      "Implemented fine-grained user permissions.",
      "Developed a React-based frontend with Tailwind CSS for a sleek user experience.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 3,
    title: "Blazor Web App",
    description:
      "A modern, interactive web application reimagined with frontend frameworks.",
    subDescription: [
      "Built a responsive Single Page Application structure.",
      "Designed modern UI components with Tailwind CSS.",
      "Handled dynamic data interactions for better performance.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/blazor-app.jpg",
    tags: [
      { id: 1, name: "HTML5", path: "/assets/logos/html5.svg" },
      { id: 2, name: "CSS3", path: "/assets/logos/css3.svg" },
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 4,
    title: "C++ Game Engine",
    description:
      "A lightweight game engine restructured for better portfolio demonstration.",
    subDescription: [
      "Showcased core logic design and rendering techniques.",
      "Experimented with frontend performance concepts.",
      "Added Git workflow for version control and collaboration.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/game-engine.jpg",
    tags: [
      { id: 1, name: "Git", path: "/assets/logos/git.svg" },
      { id: 2, name: "Microsoft", path: "/assets/logos/microsoft.svg" },
    ],
  },
  {
    id: 5,
    title: "WordPress Custom Theme",
    description:
      "A fully customizable WordPress theme optimized for performance and SEO.",
    subDescription: [
      "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
      "Integrated Tailwind CSS for modern styling and UI enhancements.",
      "Optimized SEO and page speed with clean coding practices.",
      "Implemented custom widgets and plugin compatibility.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/wordpress-theme.jpg",
    tags: [
      { id: 1, name: "WordPress", path: "/assets/logos/wordpress.svg" },
      { id: 2, name: "HTML5", path: "/assets/logos/html5.svg" },
      { id: 3, name: "CSS3", path: "/assets/logos/css3.svg" },
      { id: 4, name: "PHP", path: "/assets/logos/php.svg" }, // ✅ Corrected
    ],
  },

  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
    subDescription: [
      "Created frontend interface with React for interactive learning.",
      "Developed responsive UI with Tailwind CSS.",
      "Implemented quiz system and video sections.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/elearning.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/margoob/",
    icon: "/assets/socials/linkedIn.svg",
  },
  // {
  //   name: "Instagram",
  //   href: "https://www.instagram.com/ali.sanatidev/reels/",
  //   icon: "/assets/socials/instagram.svg",
  // },
];

export const experiences = [
  {
    title: "Frontend Developer Intern",
    job: "CodeCraft IT Solutions (Bhopal)",
    date: "2021-2023",
    contents: [
      "Developed responsive web pages with HTML, CSS, and JavaScript.",
      "Contributed to React projects and created UI layouts with TailwindCSS.",
      "Worked on bug fixes, Git version control, and agile workflows.",
    ],
  },
  {
    title: "WordPress Developer",
    job: "Digital Agency / Freelance",
    date: "2023-2024",
    contents: [
      "Built and customized WordPress themes and plugins.",
      "Optimized speed, SEO, and accessibility for client websites.",
      "Delivered user-friendly CMS solutions enabling clients to manage and update content independently.",
    ],
  },
  {
    title: "Frontend Developer (Web & Mobile)",
    job: "Affy Cloud Solution (Startup)",
    date: "2024-Present",
    contents: [
      "Building cross-platform apps with React and modern UI tools.",
      "Developing responsive layouts and integrating backend APIs.",
      "Integrating backend APIs and ensuring smooth workflows for real-world product launches.",
      "Delivering scalable products and contributing to design discussions.",
    ],
  },
  {
    title: "Freelance Web Developer",
    job: "Self-Employed",
    date: "2024-Present",
    contents: [
      "Created portfolio projects with React, Three.js, and Vite.",
      "Designed responsive websites and interactive UIs with 3D elements.",
      "Worked with startups and continued learning advanced JavaScript.",
      "Continuously learning advanced JavaScript, web performance optimization, and scaling frontend architecture.",
    ],
  },
];

export const reviews = [
  {
    name: "Aryan",
    username: "@aryan",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Khalid",
    username: "@khalid",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "Sumit",
    username: "@sumit",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Aniket",
    username: "@aniket",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
