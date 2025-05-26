
// File: src/sections/Projects.jsx
import ProjectCard from "../components/ProjectCard";
import '../components/ProjectCard.css';
import { motion } from "framer-motion";

const projects = [
  {
    title: "NEXTFLIX",
    description: "NEXTFLIX is a MERN stack web application for tracking and managing trending movies. Users can sign up, log in, and add or remove movies from their favourites. Admins have a separate panel to perform full CRUD operations on movie entries. The app features a responsive React frontend, a Node.js/Express backend, and uses MongoDB for data storage. It showcases my full-stack skills and ability to build user-friendly, role-based applications.",
    // tech: "MERN Stack",
    github: "https://github.com/chan-basha",
  },
  {
    title: "WanderLust",
    description: "Wanderlust is a full-stack rental application inspired by Airbnb, built using Node.js, Express.js, and MongoDB for backend and database management. It features property listings with full CRUD operations and a responsive UI developed using HTML, CSS, and JavaScript. Currently, I’m integrating user authentication and a booking system to enhance functionality and user experience.",
    // tech: "HTML, CSS, JS, MongoDB, NodeJS, ExpressJS",
    github: "https://github.com/chan-basha",
  },
  {
    title: "Emergency Response Coordination System",
    description: "🚨 Emergency Response Coordination System is a MERN stack web application that streamlines communication between administrators and responders during emergencies. Admins can assign tasks in real-time, while responders can accept and update task statuses through their dedicated dashboards. The system features secure role-based authentication, dynamic navbar rendering, and a responsive UI for seamless coordination.",
    // tech: "MERN Stack",
    github: "https://github.com/chan-basha",
  },
];

export default function Projects() {
  return (
    <motion.div
      id="projects"
      className="projects-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </motion.div>
  );
}
