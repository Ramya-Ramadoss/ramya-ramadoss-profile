export const profile = {
  name: "Ramya Ramadoss",
  taglines: [
    "AI/ML Engineer",
    "Software Developer",
    "Data Analyst",
    "Research Enthusiast",
  ],
  intro: "Building the future of artificial intelligence. Specialized in computer vision, autonomous systems, and data analytics. Crafting elegant solutions to complex problems.",
  about: {
    bio: "I am a Computer Science student at VIT Chennai with a deep passion for Artificial Intelligence and Machine Learning. My journey involves creating autonomous systems, analyzing complex data, and building scalable full-stack applications. I thrive at the intersection of research and practical engineering.",
    traits: ["Analytical Thinker", "Problem Solver", "Continuous Learner", "Innovator"],
    roadmap: [
      { topic: "Advanced Deep Learning", progress: 80 },
      { topic: "Autonomous Systems & ROS2", progress: 75 },
      { full: false, topic: "Large Language Models", progress: 60 },
      { topic: "Cloud Architecture", progress: 65 },
    ]
  },
  skills: [
    {
      category: "Programming",
      items: [
        { name: "Python", value: 95 },
        { name: "C++", value: 85 },
        { name: "JavaScript/TypeScript", value: 90 },
      ]
    },
    {
      category: "AI / ML",
      items: [
        { name: "Computer Vision (YOLO, OpenCV)", value: 90 },
        { name: "Deep Reinforcement Learning", value: 80 },
        { name: "Machine Learning (Scikit-learn, Pandas)", value: 85 },
        { name: "ROS2 & Gazebo", value: 75 },
      ]
    },
    {
      category: "Frontend & Backend",
      items: [
        { name: "React & Next.js", value: 90 },
        { name: "Node.js & Express", value: 85 },
        { name: "Streamlit", value: 80 },
      ]
    },
    {
      category: "Database & Cloud",
      items: [
        { name: "PostgreSQL", value: 85 },
        { name: "Firebase", value: 80 },
        { name: "AWS / Cloud Deployments", value: 70 },
      ]
    }
  ],
  projects: [
    {
      title: "AI-Powered Hospital Liquid Waste Detection",
      category: "Robotics & AI",
      status: "completed" as const,
      description: "Autonomous Cleaning Robot Navigation System using advanced computer vision and SLAM for precise hospital environment mapping and waste detection.",
      tech: ["YOLOv8", "OpenCV", "ROS2", "Gazebo", "SLAM", "Python", "Deep RL"],
      link: "#",
      image: ""
    },
    {
      title: "Emergency Response Intelligence Dashboard",
      category: "Data Analytics",
      status: "completed" as const,
      description: "Real-time analytical dashboard predicting and mapping emergency scenarios using historical and live data feeds.",
      tech: ["Python", "Pandas", "Streamlit", "Plotly", "Machine Learning"],
      link: "#",
      image: ""
    },
    {
      title: "StudySync",
      category: "Full Stack",
      status: "completed" as const,
      description: "Personalized study group matching platform utilizing collaborative filtering to connect students with complementary skills.",
      tech: ["React", "Node.js", "Express", "PostgreSQL"],
      link: "#",
      image: ""
    },
    {
      title: "AthleteX",
      category: "Full Stack",
      status: "ongoing" as const,
      description: "Sports training and performance tracker offering actionable insights and progress metrics for athletes.",
      tech: ["React", "PostgreSQL", "Node.js"],
      link: "#",
      image: ""
    }
  ],
  quotes: [
    {
      text: "The best way to predict the future is to invent it.",
      author: "Alan Kay"
    },
    {
      text: "Artificial intelligence is the new electricity.",
      author: "Andrew Ng"
    },
    {
      text: "In the middle of every difficulty lies opportunity.",
      author: "Albert Einstein"
    },
    {
      text: "Data is the new oil. It's valuable, but if unrefined it cannot really be used.",
      author: "Clive Humby"
    },
    {
      text: "The science of today is the technology of tomorrow.",
      author: "Edward Teller"
    },
    {
      text: "Machine intelligence is the last invention that humanity will ever need to make.",
      author: "Nick Bostrom"
    },
  ],
  experience: [
    {
      role: "AI/ML Intern",
      company: "Hexaware Technologies",
      period: "2024 - Present",
      description: "Working on enterprise-scale AI solutions, optimizing machine learning models, and contributing to data infrastructure improvements."
    }
  ],
  education: {
    institution: "VIT Chennai",
    degree: "B.Tech Computer Science and Engineering",
    cgpa: "8.58",
    graduation: "Expected 2028"
  },
  research: [
    "AI", "ML", "Explainable AI", "Computer Vision", "Deep Learning",
    "Medical AI", "Healthcare AI", "Robotics", "LLMs", "Autonomous Systems"
  ],
  achievements: [
    "Event Management Committee Lead",
    "Open Source Programming Club Member",
    "Reforge Community Member",
    "Hackathon Participant",
    "Technical Community Contributor"
  ],
  stats: [
    { value: 4,    suffix: '',  label: 'Projects Built',   prefix: '' },
    { value: 8.58, suffix: '',  label: 'CGPA at VIT',      prefix: '' },
    { value: 7,    suffix: '+', label: 'Programming Langs',prefix: '' },
    { value: 6,    suffix: '',  label: 'Languages Known',  prefix: '' },
  ],
  certifications: [
    { title: "German Language B1 Level", issuer: "Goethe-Institut", date: "Completed" },
    { title: "Hindi Pandit Certification", issuer: "Dakshina Bharat Hindi Prachar Sabha", date: "Completed" },
    { title: "AWS Cloud Practitioner", issuer: "Amazon Web Services", date: "Planned" },
    { title: "Microsoft Azure AI Fundamentals", issuer: "Microsoft", date: "Planned" },
    { title: "Google Data Analytics", issuer: "Google", date: "Planned" }
  ],
  contact: {
    email: "hairamya57@gmail.com",
    linkedin: "https://linkedin.com/in/ramya-ramadoss",
    github: "https://github.com/Ramya-Ramadoss",
    leetcode: "https://leetcode.com/Ramya-Ramadoss",
    location: "Chennai, Tamil Nadu, India"
  }
};
