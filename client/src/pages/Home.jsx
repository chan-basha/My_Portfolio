
// src/sections/Home.jsx
import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import '../Portfolio-styles.css';
import chanPic from '../assets/chanPic.jpg'; // adjust path if needed

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function Home() {
  return (
    <motion.section
      id="home"
      className="home-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="home-content" variants={childVariants}>
        <motion.img
          src={chanPic}
          alt="Profile"
          className="home-profile-img"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: 'spring', stiffness: 120 }}
        />

        <motion.h1 className="home-title" variants={childVariants}>
          Hi, I'm Shaik Chan Basha
        </motion.h1>

        <motion.p className="home-subtitle" variants={childVariants}>
          MERN Stack Developer
        </motion.p>

        <motion.p className="home-description" variants={childVariants}>
          👋 Hi, I’m Shaik Chan Basha, a MERN Stack Developer and 3rd-year B.Tech IT student. I build responsive, full-stack web apps with clean UI and powerful backend logic. Passionate about solving real-world problems through code and always eager to learn and grow.

        </motion.p>

        <motion.div className="home-socials" variants={childVariants}>
          <motion.a
            href="https://github.com/chan-basha"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#00f0ff' }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Github />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/shaikchanbasha"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#00f0ff' }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Linkedin />
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Home;
