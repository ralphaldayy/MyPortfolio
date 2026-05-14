import {
  Award,
  Briefcase,
  Code,
  GraduationCap,
  HardDrive,
  Layout,
  Network,
  Server,
  Shield,
  Smartphone,
  Video,
} from 'lucide-react';

export const personalInfo = {
  name: "Ralph Laurence B. Alday",
  photo: "/profile.png", // User should upload their photo to /public/profile.png
  title: "IT Helpdesk | IT Support | IT Technician",
  email: "ralphlaurencealday@gmail.com",
  location: "San Jose, Batangas, 4227",
  summary: "Detail-oriented IT professional with a foundation in cloud administration and hardware lifecycle management. Recently completed a comprehensive internship at HelloConnect, where I managed Google Workspace, Microsoft Azure/Entra ID, and Jira ticketing for high-volume environments. I combine a Bachelor’s degree in IT with a Google IT Support Professional Certificate to deliver efficient technical troubleshooting and seamless user experiences across Windows and macOS platforms.",
  socials: {
    linkedin: "#", // Add link if provided
    facebook: "#",
  }
};

export const experiences = [
  {
    role: "IT Support Engineer Intern",
    company: "HelloConnect Philippines",
    logo: "/helloconnect.png", // User should upload to public/helloconnect.png
    date: "February 2026 - June 2026",
    tech: [
      { name: "Google Workspace", logo: "/google.svg" },
      { name: "Slack", logo: "/Slack_icon_2019.svg" },
      { name: "Microsoft Azure", logo: "/Microsoft_Azure.svg" },
      { name: "Microsoft 365", logo: "/Microsoft_365_Logo_0.svg" },
      { name: "Intune", logo: "/Microsoft-intune.svg" },
      { name: "Jira", logo: "/Jira--Streamline-Svg-Logos.svg" },
      { name: "Snipe-IT", logo: "/snipeit.svg" },
      { name: "TeamViewer", logo: "/teamviewer.svg" },
      { name: "Jamf", logo: "/jamf-icon.svg" },
    ],
    bullets: [
      "Administer and secure the Google Workspace and Slack environments, managing user lifecycles, security settings, and channel architecture.",
      "Oversee cloud infrastructure and identity access via Microsoft Azure and Entra ID, maintaining virtual machines and configuring Microsoft 365 services, including Teams, SharePoint, and Intune.",
      "Manage and resolve high-volume stakeholder requests through the Jira ticketing system, efficiently handling software procurement and complex technical troubleshooting.",
      "Direct the full lifecycle of IT assets using Snipe-IT, from procurement to the management of software licenses, ensuring 100% accountability.",
      "Execute the physical deployment and maintenance of production workstations, maintaining high standards for cable management.",
      "Provide comprehensive remote technical support utilizing TeamViewer and Jamf, diagnosing and resolving OS issues for Windows and macOS platforms.",
      "Conduct daily operational audits of production assets and facilitate formal documentation of equipment transfers."
    ]
  },
  {
    role: "Software Test Lead / Quality Assurance Team Lead Intern",
    company: "Creotec Philippines Inc.",
    logo: "/creotec.png", // User should upload to public/creotec.png
    date: "January 2021 - February 2021",
    bullets: [
      "Oversaw a team of student testers to evaluate mobile and web applications developed by the engineering department.",
      "Developed and organized structured test cases covering functional requirements, user interface consistency, and reliability.",
      "Served as the primary point of contact between the test team and developers to relay bug reports.",
      "Documented technical issues with clear reproduction steps and environment details to help the development team resolve defects.",
      "Performed final regression testing on updated builds to confirm new code changes did not break application features.",
      "Managed the team’s daily workflow and deadlines, ensuring all assigned testing modules were completed before project turnover."
    ]
  }
];

export const education = [
  {
    degree: "Bachelor of Science in Information and Technology Major in Multimedia Technology",
    school: "Lyceum of the Philippines University - Batangas",
    date: "August 2026",
    logo: "/lpu-logo.png",
    bullets: [
      "Proficient in diagnosing and repairing hardware, software, and operating system issues.",
      "Skilled in configuring and managing network infrastructure, including routers, switches, and secure connectivity protocols."
    ]
  },
  {
    degree: "Junior & Senior Highschool",
    school: "St. Joseph Academy of San Jose, Batangas Inc.",
    date: "May 2021",
    logo: "/sja-logo.png",
    bullets: [
      "Resolved connectivity issues and performed basic network troubleshooting for classroom technology.",
      "Managed and maintained the campus computer laboratory hardware to ensure 100% equipment uptime for student use."
    ]
  }
];

export const technicalSkills = [
  {
    category: "Cloud & Identity Management",
    skills: ["Microsoft Azure", "Entra ID", "Google Workspace", "Microsoft 365 (Teams, SharePoint)"]
  },
  {
    category: "Hardware & Endpoint Management",
    skills: ["Windows & macOS Troubleshooting", "Intune", "Jamf", "TeamViewer", "PC Assembly & Deployment"]
  },
  {
    category: "Networking & Infrastructure",
    skills: ["Cisco Routing & Switching", "Network Security Protocols", "IoT Devices Integration", "TCP/IP & Subnetting"]
  },
  {
    category: "IT Service Management (ITSM)",
    skills: ["Jira Ticketing System", "Snipe-IT Asset Management", "ITIL / SLA Management"]
  },
  {
    category: "Cybersecurity & Data Privacy",
    skills: ["Endpoint Protection", "Data Privacy Policies", "Security Auditing", "Threat Mitigation"]
  },
  {
    category: "Software Testing & QA",
    skills: ["Manual Testing", "Regression Testing", "Bug Tracking", "Test Case Development"]
  }
];

export const certifications = [
  {
    category: "IT Help Desk / IT Support / IT Technician",
    items: [
      { name: "Google IT Support Professional Certificate", date: "April 30, 2026", issuer: "Google", logo: "/google-it-support.png", link: "https://www.credly.com/badges/aff4e5d8-e573-4a8d-9b38-df081f3ece06/public_url", credentialId: "aff4e5d8-e573-4a8d-9b38-df081f3ece06" },
      { name: "CCNA: Introduction to Networks", date: "July 10, 2024", issuer: "Cisco", logo: "/cisco-ccna-intro.png", link: "https://www.credly.com/badges/c6282c4b-a982-4089-b3f8-d27a01fec914/public_url", credentialId: "c6282c4b-a982-4089-b3f8-d27a01fec914" },
      { name: "Networking Basics", date: "December 9, 2025", issuer: "Cisco", logo: "/cisco-networking-basics.png", link: "https://www.credly.com/badges/6356adc5-4115-4a37-8e19-f584ddd3f61b/public_url", credentialId: "6356adc5-4115-4a37-8e19-f584ddd3f61b" },
      { name: "NDG Linux Unhatched", date: "April 25, 2024", issuer: "Cisco", logo: "/cisco.svg" },
      { name: "IoT Devices", date: "April 24, 2025", issuer: "Illinois (Coursera)", logo: "/coursera.svg", link: "https://coursera.org/share/b182a0ed0728899f88e25c4d964b649a" }
    ]
  },
  {
    category: "Cybersecurity",
    items: [
      { name: "CCNA: Switching, Routing, and Wireless Essentials", date: "June 4, 2025", issuer: "Cisco", logo: "/cisco-ccna-srwe.png", link: "https://www.credly.com/badges/0eec424a-1096-4d77-a48a-36e841847030/public_url", credentialId: "0eec424a-1096-4d77-a48a-36e841847030" },
      { name: "Introduction to Cybersecurity Essentials", date: "May 23, 2025", issuer: "IBM", logo: "/cybersecurity-essentials.png", link: "https://coursera.org/share/b6faf41302ad10ed4f175d7e26c4baec" },
      { name: "IBM Data Privacy for Information Architecture", date: "May 23, 2025", issuer: "IBM", logo: "/ibm.svg", link: "https://coursera.org/share/9d0ac34a062633c35b6dfba18960d528" }
    ]
  },
  {
    category: "Artificial Intelligence (AI) & Deep Learning",
    items: [
      { name: "Advanced Deep Learning Specialist", date: "May 6, 2026", issuer: "IBM", logo: "/ibm-advanced-deep-learning.png", link: "https://www.credly.com/badges/914ff2b7-7eab-4daa-be00-466b5dccbf64/public_url", credentialId: "914ff2b7-7eab-4daa-be00-466b5dccbf64" },
      { name: "Deep Learning Essentials with Keras", date: "May 6, 2026", issuer: "IBM", logo: "/ibm-deep-learning-keras.png", link: "https://www.credly.com/badges/83cee648-53aa-4f14-a0ec-6a1fe54bf795/public_url", credentialId: "83cee648-53aa-4f14-a0ec-6a1fe54bf795" },
      { name: "Introduction to Deep Learning & Neural Networks with Keras", date: "June 4, 2025", issuer: "IBM", logo: "/ibm.svg", link: "https://www.coursera.org/account/accomplishments/verify/JM5ZRJ2HT0TB?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" },
      { name: "AI Fundamentals with IBM SkillsBuild", date: "March 21, 2025", issuer: "Cisco", logo: "/cisco-ai-fundamentals.png", link: "https://www.credly.com/badges/68c3c0ed-da54-4e73-ba2c-d32fee8ce4e6/public_url", credentialId: "68c3c0ed-da54-4e73-ba2c-d32fee8ce4e6" },
      { name: "Artificial Intelligence Fundamentals", date: "March 21, 2025", issuer: "Cisco", logo: "/ibm-ai-fundamentals.png", link: "https://www.credly.com/badges/2af1aa89-1785-4506-81a0-fb0d6aa6d5d1/public_url", credentialId: "2af1aa89-1785-4506-81a0-fb0d6aa6d5d1" }
    ]
  },
  {
    category: "Multimedia & Graphic Design",
    items: [
      { name: "Visual Graphic Design NC III (Partial fulfillment)", date: "December 1, 2025", issuer: "TESDA", logo: "/tesda.png", credentialId: "25041000025862" },
      { name: "Adobe Premiere Pro for Beginners: Quickstart Video-Editing", date: "May 21, 2025", issuer: "Coursera", logo: "/coursera.svg", link: "https://coursera.org/share/aaccaa937e4433b40b0b9d29512dc782" },
      { name: "VR and 360 Video Production", date: "May 21, 2025", issuer: "Daydream", logo: "/google.svg", link: "https://coursera.org/share/3fd534b63df7a1231e441b4efdef596b" },
      { name: "Using Video in Social Media Posts with Canva", date: "April 8, 2025", issuer: "Canva", logo: "/canva.png", link: "https://coursera.org/share/f3e5e653086a274ce24a350ce068a31d" },
      { name: "Create Training Videos with Powtoon", date: "April 8, 2025", issuer: "Powtoon", logo: "/powtoon.png", link: "https://coursera.org/share/5b81362a2e4012eedc21d741083693d8" },
      { name: "Copyright for Multimedia", date: "May 21, 2025", issuer: "Duke", logo: "/coursera.svg", link: "https://coursera.org/share/3724b821b203656db30805d550123994" }
    ]
  },
  {
    category: "Microsoft & Professional Tools",
    items: [
      { name: "Microsoft Office Specialist: Excel Associate (Microsoft 365 Apps)", date: "December 15, 2025", issuer: "Microsoft", logo: "/microsoft-excel-associate.png", link: "https://www.credly.com/badges/176a1b97-cbd7-41a0-8120-e9bf19e7e9ac/public_url", credentialId: "176a1b97-cbd7-41a0-8120-e9bf19e7e9ac" }
    ]
  }
];

export const projects = [
  {
    title: "LyceumVault: Integrated Digital Repository",
    link: "https://lyceumvault.netlify.app",
    logo: "/lpu-logo.png",
    description: "A secure, web-based digital repository designed for the Sotero H. Laurel Learning Resource Center (SLRC) at LPU-Batangas to digitally archive and track the usage of undergraduate and graduate research collections.",
    tech: [
      { name: "React.js", logo: "/react.svg" },
      { name: "TypeScript", logo: "/typescript.svg" },
      { name: "Supabase", logo: "/supabase.svg" },
      { name: "PostgreSQL", logo: "/postgresql.svg" }
    ]
  },
  {
    title: "Personal Website Portfolio",
    link: "#",
    logo: "/it-support.png",
    description: "Designed and developed to serve as a high-performance digital hub that showcases my expertise in enterprise IT support, infrastructure administration, and systems security. Features include a fully responsive architecture and a centralized repository for professional certifications.",
    tech: [
      { name: "React.js", logo: "/react.svg" },
      { name: "Tailwind CSS", logo: "/tailwindcss.svg" },
      { name: "TypeScript", logo: "/typescript.svg" }
    ]
  }
];
