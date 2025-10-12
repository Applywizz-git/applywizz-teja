import { 
  SiSpringboot, SiPython, SiTypescript, SiJavascript, SiCplusplus,
  SiSpring, SiReact, SiAngular, SiNodedotjs, SiRedux,
  SiHtml5, SiCss3, SiBootstrap, SiMui,
  SiPostgresql, SiMysql, SiMongodb, SiRedis, SiElasticsearch,
  SiAmazon, SiGooglecloud, SiKubernetes, SiDocker,
  SiApachekafka, SiRabbitmq,
  SiJest, SiSelenium, SiPostman,
  SiPrometheus, SiGrafana,
  SiGit, SiGithub, SiGitlab, SiJira
} from 'react-icons/si';
import { Code2, Database, Cloud, GitBranch, TestTube, Activity, Coffee, Box, CloudIcon } from 'lucide-react';

export const personalInfo = {
  name: "RAVI TEJA",
  title: "Java Full Stack Developer",
  location: "Irving, TX",
  phone: "+1 (903) 980-2398",
  email: "ravitejamanne22@gmail.com",
  linkedin: "https://www.linkedin.com/in/ravi-teja",
  github: "https://github.com/raviteja",
  summary: "Java Full Stack Developer with 6+ years of experience building secure, scalable, and high-performance applications in banking, healthcare, and e-commerce. Expert in Java 17/18, J2EE, Spring Boot, Spring WebFlux, Microservices, Project Reactor, and reactive programming handling 250+ TPS systems. Skilled in frontend development using React 17+, Angular 11+, Redux, and TypeScript, delivering responsive SPAs for 50K+ daily users."
};

export const stats = [
  { label: "Years Experience", value: 6, suffix: "+" },
  { label: "Projects Completed", value: 15, suffix: "+" },
  { label: "Technologies Mastered", value: 40, suffix: "+" },
  { label: "System Uptime", value: 99.99, suffix: "%" }
];

export const experience = [
  {
    id: 1,
    title: "Java Full Stack Developer",
    company: "Citi Bank",
    location: "Irving, TX",
    period: "Sep 2023 - Present",
    description: "Leading development of reactive REST APIs and cloud-native solutions for banking systems.",
    achievements: [
      "Developed reactive REST APIs using Spring Boot and WebFlux, enabling 20% faster loan processing",
      "Applied Spring Security with OAuth2 and JWT to enforce RBAC, securing sensitive banking data",
      "Streamlined deployments with Jenkins, Kubernetes, Docker, and Terraform, reducing release cycle by 60%",
      "Architected asynchronous messaging with Kafka and RabbitMQ, achieving 99.99% uptime",
      "Tuned JVM performance with optimized garbage collection and thread management",
      "Integrated Splunk, ELK Stack, Prometheus, and Grafana dashboards, reducing issue resolution by 35%"
    ],
    technologies: ["Spring Boot", "WebFlux", "OAuth2", "JWT", "Kafka", "RabbitMQ", "Kubernetes", "Docker", "AWS"]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "CVS Health",
    location: "Bangalore",
    period: "Feb 2021 - Jul 2023",
    description: "Built HIPAA-compliant healthcare applications with real-time patient data management.",
    achievements: [
      "Designed secure Spring Boot microservices, increasing patient scheduling efficiency by 30%",
      "Built dynamic SPAs with ReactJS and Angular, reducing manual data retrieval by 40%",
      "Leveraged RabbitMQ and Azure Service Bus for real-time prescription updates",
      "Optimized PostgreSQL and MongoDB queries, cutting retrieval times by 60%",
      "Implemented infrastructure automation with AKS, Terraform, and Azure DevOps",
      "Created monitoring dashboards with Prometheus and Grafana"
    ],
    technologies: ["Spring Boot", "React", "Angular", "PostgreSQL", "MongoDB", "Azure", "Terraform"]
  },
  {
    id: 3,
    title: "Java Developer",
    company: "Target",
    location: "Bangalore",
    period: "Sep 2018 - Jan 2021",
    description: "Developed e-commerce platform features and payment processing systems.",
    achievements: [
      "Engineered secure checkout APIs with Spring Boot, improving user trust by 20%",
      "Implemented Kafka event streaming for real-time inventory synchronization",
      "Developed modular backend services supporting peak shopping loads",
      "Tuned Oracle and MongoDB queries, enhancing responsiveness by 30%",
      "Configured Log4J monitoring dashboards for application health tracking",
      "Applied Ehcache and optimized SQL queries for better performance"
    ],
    technologies: ["Spring Boot", "Kafka", "Oracle", "MongoDB", "Hibernate"]
  },
  {
    id: 4,
    title: "Software Developer Intern",
    company: "Codesets",
    location: "Bangalore",
    period: "Jan 2018 - Aug 2018",
    description: "Contributed to microservices development and API integration projects.",
    achievements: [
      "Built Kafka-based pipelines reducing processing errors by 25%",
      "Developed and tested REST APIs with Spring Boot",
      "Created responsive UI components with HTML5, CSS3, JavaScript, and jQuery",
      "Assisted with Oracle/MySQL database integration and optimization",
      "Wrote unit and integration tests achieving 95% code coverage"
    ],
    technologies: ["Spring Boot", "Kafka", "REST API", "JUnit", "Mockito"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Smart Player Performance Prediction Platform",
    description: "Real-time sports analytics platform using Java backend and Kafka streaming to process live match data and predict player fatigue and injury risk.",
    longDescription: "Leveraged Java backend and Kafka streaming to process live match and wearable sensor data, enabling real-time prediction of player fatigue and injury risk. Integrated Python ML models for advanced analytics.",
    technologies: ["Java", "Kafka", "Python", "ReactJS", "Machine Learning", "WebSockets"],
    image: "/assets/projects/player-prediction.jpg",
    features: [
      "Real-time data processing with Kafka",
      "ML-powered fatigue prediction",
      "Interactive ReactJS dashboards",
      "Wearable sensor integration"
    ],
    github: "https://github.com/raviteja/player-prediction",
    demo: "https://player-prediction-demo.com"
  },
  {
    id: 2,
    title: "AI-Powered Multi-Channel Customer Support Bot",
    description: "Intelligent customer support system automating responses across email, chat, and voice channels using GPT APIs and LangChain.",
    longDescription: "Built Java Spring Boot backend and LangChain with GPT APIs to automate responses across email, chat, and voice, reducing manual support workload by 40%.",
    technologies: ["Spring Boot", "LangChain", "GPT API", "ReactJS", "Kubernetes", "WebSockets"],
    image: "/assets/projects/support-bot.jpg",
    features: [
      "Multi-channel support (email, chat, voice)",
      "GPT-powered intelligent responses",
      "Real-time admin dashboard",
      "Kubernetes deployment for scalability"
    ],
    github: "https://github.com/raviteja/support-bot",
    demo: "https://support-bot-demo.com"
  },
  {
    id: 3,
    title: "E-Commerce Recommendation Engine",
    description: "Microservices-based recommendation system analyzing customer behavior to provide personalized product suggestions in real-time.",
    longDescription: "Developed microservices using Spring Boot and Hibernate to analyze customer behavior and purchase history, increasing cross-sell conversion by 25%.",
    technologies: ["Spring Boot", "Hibernate", "Kafka", "Redis", "ReactJS", "REST API"],
    image: "/assets/projects/recommendation-engine.jpg",
    features: [
      "Behavioral analysis and ML recommendations",
      "Event-driven architecture with Kafka",
      "Redis caching for low latency",
      "Real-time product suggestions"
    ],
    github: "https://github.com/raviteja/recommendation-engine",
    demo: "https://recommendation-demo.com"
  }
];

export const skillCategories = [
  {
    category: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Java 17/18", icon: Coffee, proficiency: 95 },
      { name: "Python", icon: SiPython, proficiency: 85 },
      { name: "TypeScript", icon: SiTypescript, proficiency: 90 },
      { name: "JavaScript ES6+", icon: SiJavascript, proficiency: 90 },
      { name: "C++", icon: SiCplusplus, proficiency: 75 }
    ]
  },
  {
    category: "Frameworks & Libraries",
    icon: Code2,
    skills: [
      { name: "Spring Boot", icon: SiSpring, proficiency: 95 },
      { name: "React", icon: SiReact, proficiency: 90 },
      { name: "Angular", icon: SiAngular, proficiency: 85 },
      { name: "Node.js", icon: SiNodedotjs, proficiency: 80 },
      { name: "Redux", icon: SiRedux, proficiency: 85 }
    ]
  },
  {
    category: "Frontend Technologies",
    icon: Code2,
    skills: [
      { name: "HTML5", icon: SiHtml5, proficiency: 95 },
      { name: "CSS3", icon: SiCss3, proficiency: 90 },
      { name: "Bootstrap", icon: SiBootstrap, proficiency: 85 },
      { name: "Material-UI", icon: SiMui, proficiency: 85 }
    ]
  },
  {
    category: "Databases & Storage",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, proficiency: 90 },
      { name: "MySQL", icon: SiMysql, proficiency: 85 },
      { name: "MongoDB", icon: SiMongodb, proficiency: 85 },
      { name: "Redis", icon: SiRedis, proficiency: 80 },
      { name: "Elasticsearch", icon: SiElasticsearch, proficiency: 75 }
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", icon: SiAmazon, proficiency: 90 },
      { name: "Azure", icon: CloudIcon, proficiency: 85 },
      { name: "Kubernetes", icon: SiKubernetes, proficiency: 85 },
      { name: "Docker", icon: SiDocker, proficiency: 90 },
      { name: "Google Cloud", icon: SiGooglecloud, proficiency: 75 }
    ]
  },
  {
    category: "Messaging & Streaming",
    icon: Activity,
    skills: [
      { name: "Apache Kafka", icon: SiApachekafka, proficiency: 90 },
      { name: "RabbitMQ", icon: SiRabbitmq, proficiency: 85 }
    ]
  },
  {
    category: "Testing & QA",
    icon: TestTube,
    skills: [
      { name: "JUnit", icon: SiJest, proficiency: 90 },
      { name: "Selenium", icon: SiSelenium, proficiency: 80 },
      { name: "Postman", icon: SiPostman, proficiency: 85 }
    ]
  },
  {
    category: "Monitoring & Observability",
    icon: Activity,
    skills: [
      { name: "Prometheus", icon: SiPrometheus, proficiency: 85 },
      { name: "Grafana", icon: SiGrafana, proficiency: 85 },
      { name: "Kibana", icon: Box, proficiency: 80 }
    ]
  },
  {
    category: "Version Control",
    icon: GitBranch,
    skills: [
      { name: "Git", icon: SiGit, proficiency: 95 },
      { name: "GitHub", icon: SiGithub, proficiency: 90 },
      { name: "GitLab", icon: SiGitlab, proficiency: 85 },
      { name: "JIRA", icon: SiJira, proficiency: 90 }
    ]
  }
];

export const education = [
  {
    id: 1,
    degree: "Masters in Information Systems and Technology",
    institution: "University of North Texas",
    location: "Denton, TX",
    period: "Aug 2023 - May 2025",
    description: "Advanced studies in cloud computing, distributed systems, and software architecture."
  },
  {
    id: 2,
    degree: "Bachelor of Technology in Electrical and Electronics Engineering",
    institution: "Gudlavalleru Engineering College",
    location: "Gudlavalleru, India",
    period: "Aug 2014 – May 2018",
    description: "Foundation in computer science, algorithms, and software engineering principles."
  }
];

export const certifications = [
  {
    id: 1,
    name: "AWS Certified Developer Associate",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-DEV-2023",
    link: "https://aws.amazon.com/certification/"
  },
  {
    id: 2,
    name: "Oracle Certified Java SE Programmer 21",
    issuer: "Oracle",
    date: "2023",
    credentialId: "ORACLE-JAVA-21",
    link: "https://education.oracle.com/java-se-programmer"
  },
  {
    id: 3,
    name: "Java Programming Fundamentals",
    issuer: "Coursera",
    date: "2022",
    credentialId: "COURSERA-JAVA",
    link: "https://www.coursera.org/"
  },
  {
    id: 4,
    name: "Spring Framework",
    issuer: "LinkedIn Learning",
    date: "2022",
    credentialId: "LINKEDIN-SPRING",
    link: "https://www.linkedin.com/learning/"
  },
  {
    id: 5,
    name: "Applied Artificial Intelligence with IBM Watson",
    issuer: "Coursera",
    date: "2021",
    credentialId: "COURSERA-AI-IBM",
    link: "https://www.coursera.org/"
  }
];
