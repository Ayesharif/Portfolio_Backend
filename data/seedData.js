export const initialSeedData = {
  profile: {
    name: 'Muhammad Ayesh',
    title: 'MERN Stack Developer',
    tagline: 'Building scalable web applications, robust backend architectures, and dynamic interactive user experiences.',
    bio: 'Passionate and detail-oriented MERN Stack Developer with extensive expertise in developing responsive, high-performance web applications. Skilled in React.js, Next.js, Node.js, Express.js, and MongoDB, with a strong foundation in building RESTful APIs, modern UI architectures, database optimization, and state management.',
    avatar: '',
    email: 'ayesharif@gmail.com',
    phone: '+92 300 1234567',
    location: 'Lahore, Pakistan',
    availability: 'Available for Full-time & Freelance Projects',
    resumeUrl: '#',
    socials: {
      github: 'https://github.com/Ayesharif',
      linkedin: 'https://www.linkedin.com/in/muhammad-ayesh-88b072248/',
      email: 'mailto:ayesharif@gmail.com',
      twitter: ''
    },
    stats: [
      { id: 1, label: 'Years Experience', value: '2+' },
      { id: 2, label: 'Projects Completed', value: '15+' },
      { id: 3, label: 'Technologies Mastered', value: '12+' },
      { id: 4, label: 'Code Commits', value: '500+' }
    ]
  },
  experiences: [
    {
      role: 'Full Stack MERN Developer',
      company: 'TechNova Solutions',
      location: 'Remote',
      period: '2023 - Present',
      type: 'Full-Time',
      description: 'Architecting and engineering responsive full-stack web applications using React, Node.js, Express, and MongoDB. Optimized database queries, implemented JWT authentication, and streamlined CI/CD deployments.',
      achievements: [
        'Built responsive SPAs with React and Tailwind CSS, increasing page load speed by 35%.',
        'Designed and implemented secure RESTful microservices with Node.js and Express.',
        'Integrated MongoDB aggregations and indexing to optimize complex search queries.'
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Redux Toolkit', 'REST APIs'],
      order: 1
    },
    {
      role: 'Frontend Developer (React)',
      company: 'InnoSoft Digital',
      location: 'Hybrid',
      period: '2022 - 2023',
      type: 'Full-Time',
      description: 'Collaborated with UI/UX designers and backend developers to translate Figma prototypes into pixel-perfect, accessible React user interfaces with seamless API integrations.',
      achievements: [
        'Engineered reusable UI component library used across 4 internal web apps.',
        'Integrated real-time state management using Context API and Redux.',
        'Ensured cross-browser compatibility and 100% mobile responsiveness.'
      ],
      technologies: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Axios', 'Git', 'Figma'],
      order: 2
    },
    {
      role: 'Junior Web Developer & Intern',
      company: 'CodeCraft Studios',
      location: 'On-site',
      period: '2021 - 2022',
      type: 'Internship',
      description: 'Assisted in building client websites, fixing front-end bugs, and creating dynamic JavaScript functionality with responsive HTML5/CSS3 layouts.',
      achievements: [
        'Assisted in refactoring legacy codebases to modern React components.',
        'Participated in daily agile standups and code review sessions.'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Git', 'REST APIs'],
      order: 3
    }
  ],
  projects: [
    {
      title: 'Full-Stack E-Commerce Platform',
      category: 'Full Stack',
      featured: true,
      description: 'A complete MERN stack e-commerce web application featuring user authentication, product catalog with filter & search, cart management, Stripe payment gateway integration, and an admin dashboard for order and inventory management.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop',
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS', 'Stripe API'],
      liveUrl: 'https://github.com/Ayesharif',
      githubUrl: 'https://github.com/Ayesharif',
      order: 1
    },
    {
      title: 'Real-Time Collaboration & Task Manager',
      category: 'Full Stack',
      featured: true,
      description: 'Collaborative project management dashboard built with React, Node.js, and Socket.io. Supports drag-and-drop Kanban boards, team workspaces, live notifications, and real-time chat updates.',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1000&auto=format&fit=crop',
      tags: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'Express.js', 'Tailwind CSS'],
      liveUrl: 'https://github.com/Ayesharif',
      githubUrl: 'https://github.com/Ayesharif',
      order: 2
    },
    {
      title: 'AI Prompt Engineering & Share Hub',
      category: 'Frontend',
      featured: true,
      description: 'Modern AI prompt sharing and discovery platform featuring dynamic tag filtering, copy-to-clipboard interactions, user profile collections, and seamless responsive design.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop',
      tags: ['Next.js', 'React.js', 'Tailwind CSS', 'Framer Motion', 'REST API'],
      liveUrl: 'https://github.com/Ayesharif',
      githubUrl: 'https://github.com/Ayesharif',
      order: 3
    },
    {
      title: 'Social Media Feed & Microblogging App',
      category: 'Full Stack',
      featured: false,
      description: 'Full-featured social media platform with user authentication, post creation, image uploads via Cloudinary, like/comment system, and follower feeds.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Cloudinary'],
      liveUrl: 'https://github.com/Ayesharif',
      githubUrl: 'https://github.com/Ayesharif',
      order: 4
    },
    {
      title: 'Interactive Weather & Air Quality Radar',
      category: 'Frontend',
      featured: false,
      description: 'Clean, animated weather dashboard fetching live multi-city weather data, 7-day forecasts, and interactive temperature/humidity graphs via OpenWeather API.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1000&auto=format&fit=crop',
      tags: ['React.js', 'Tailwind CSS', 'OpenWeather API'],
      liveUrl: 'https://github.com/Ayesharif',
      githubUrl: 'https://github.com/Ayesharif',
      order: 5
    },
    {
      title: 'Secure RESTful Authentication API Service',
      category: 'Backend',
      featured: false,
      description: 'Production-ready backend authentication microservice featuring access/refresh token rotation, email verification, password reset tokens, rate limiting, and helmet security middleware.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop',
      tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Bcrypt', 'Nodemailer'],
      liveUrl: 'https://github.com/Ayesharif',
      githubUrl: 'https://github.com/Ayesharif',
      order: 6
    }
  ],
  skills: [
    { name: 'React.js', category: 'Frontend', level: 92, icon: 'React', order: 1 },
    { name: 'JavaScript (ES6+)', category: 'Frontend', level: 95, icon: 'Code2', order: 2 },
    { name: 'Next.js', category: 'Frontend', level: 85, icon: 'Layers', order: 3 },
    { name: 'Tailwind CSS', category: 'Frontend', level: 94, icon: 'Palette', order: 4 },
    { name: 'HTML5 & CSS3', category: 'Frontend', level: 98, icon: 'Layout', order: 5 },
    { name: 'Redux Toolkit', category: 'Frontend', level: 88, icon: 'Cpu', order: 6 },
    { name: 'Node.js', category: 'Backend', level: 90, icon: 'Server', order: 7 },
    { name: 'Express.js', category: 'Backend', level: 92, icon: 'Cpu', order: 8 },
    { name: 'RESTful APIs', category: 'Backend', level: 94, icon: 'Globe', order: 9 },
    { name: 'JWT & Auth', category: 'Backend', level: 89, icon: 'Shield', order: 10 },
    { name: 'MongoDB', category: 'Database', level: 90, icon: 'Database', order: 11 },
    { name: 'Mongoose ODM', category: 'Database', level: 92, icon: 'Database', order: 12 },
    { name: 'PostgreSQL', category: 'Database', level: 80, icon: 'Database', order: 13 },
    { name: 'Git & GitHub', category: 'DevOps & Tools', level: 92, icon: 'GitBranch', order: 14 },
    { name: 'Postman', category: 'DevOps & Tools', level: 90, icon: 'Terminal', order: 15 },
    { name: 'Vite / Webpack', category: 'DevOps & Tools', level: 88, icon: 'Zap', order: 16 }
  ],
  certifications: [
    {
      title: 'MERN Full-Stack Web Development',
      issuer: 'Coursera / Meta Specialization',
      date: '2023',
      credentialUrl: 'https://www.coursera.org',
      credentialId: 'META-MERN-89324',
      description: 'Mastered full-stack application development using MongoDB, Express.js, React, and Node.js with scalable REST API architecture.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
      images: ['https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop']
    },
    {
      title: 'JavaScript Algorithms & Data Structures',
      issuer: 'freeCodeCamp',
      date: '2023',
      credentialUrl: 'https://www.freecodecamp.org',
      credentialId: 'FCC-JS-90218',
      description: 'Demonstrated proficiency in OOP, Functional Programming, algorithmic problem solving, and complex data structures.',
      image: '',
      images: []
    },
    {
      title: 'MongoDB Certified Node.js Developer',
      issuer: 'MongoDB University',
      date: '2023',
      credentialUrl: 'https://learn.mongodb.com',
      credentialId: 'MDB-NODE-4192',
      description: 'Focused on schema design, aggregation pipelines, performance indexing, and Mongoose ODM integration.',
      image: '',
      images: []
    },
    {
      title: 'Responsive Web Design & UI Development',
      issuer: 'freeCodeCamp',
      date: '2022',
      credentialUrl: 'https://www.freecodecamp.org',
      credentialId: 'FCC-RWD-77123',
      description: 'Built pixel-perfect responsive layouts utilizing CSS Grid, Flexbox, media queries, and modern UI accessibility standards.',
      image: '',
      images: []
    }
  ],
  education: [
    {
      degree: 'Bachelor of Science in Computer Science (BSCS)',
      institution: 'University of Central Punjab',
      location: 'Lahore, Pakistan',
      period: '2020 - 2024',
      grade: '3.5 / 4.0 CGPA',
      description: 'Studied core computing disciplines including Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Web Technologies, Software Engineering, and Computer Networks.',
      highlights: [
        'Final Year Project: High-Performance MERN Stack SaaS Platform.',
        'Active member of the University Computing & Innovation Society.'
      ]
    },
    {
      degree: 'Intermediate in Computer Science (ICS)',
      institution: 'Punjab Group of Colleges',
      location: 'Lahore, Pakistan',
      period: '2018 - 2020',
      grade: 'Grade A',
      description: 'Foundation in Computer Science, Mathematics, Physics, and Logic Building.',
      highlights: ['Top quartile academic standing', 'Academic Excellence Certificate']
    }
  ]
};
