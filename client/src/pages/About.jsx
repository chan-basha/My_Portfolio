
// src/sections/About.jsx
import { motion } from "framer-motion";

const skills = ['React.js','Node.js','Express.js','MongoDB', 'Java', 'C', 'Python', 'MySQL','Tailwind CSS','Bootstrap', 'Material UI','GitHub','Git','VSCode','LaTeX','Postman'];

function About() {
  return (
    <motion.section
      id="about"
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="about-title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="about-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Trying to make "Hello World" the new "abc".<br /><br />
        Technology excites me and I am always in awe of the change it drives in the world. 
        Certain skills that I have worked with include Data Structures and Algorithms (Java), Web Development (Node.js, MongoDB, Express.js, React) & Machine Learning (Python). 
        And what I might lack in skills I make up for with my determination to learn.<br /><br />
        Outside of tech, I’m a professional Taekwondo athlete, which has taught me the value of discipline, focus, and perseverance—skills that directly translate into my approach to development.
      </motion.p>

      {/* <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h3>Education</h3>
        <p>B.Tech, Information Technology, 3rd Year</p>
      </motion.div> */}
      <motion.div
  className="about-education"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.6 }}
>
  <h3>Education</h3>
  <p>B.Tech, Information Technology, 3rd Year</p>
</motion.div>


      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h3>Tech Stack / Skills</h3>
        <div className="about-skills">
          {skills.map((skill, idx) => (
            <span key={idx} className="skill-badge">{skill}</span>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}

export default About;
