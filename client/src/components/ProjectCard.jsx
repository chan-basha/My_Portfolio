
// File: src/components/ProjectCard.jsx
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectCard({ title, description, tech, github, index }) {
  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.05, rotate: 1 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.4 }}
    >
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <p className="tech">{tech}</p>
      <a href={github} target="_blank" rel="noopener noreferrer" className="github-link">
        GitHub <ExternalLink size={16} className="icon" />
      </a>
    </motion.div>
  );
}
