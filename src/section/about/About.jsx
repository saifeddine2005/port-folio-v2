import "./About.scss";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about" id="About">
      <div className="about-background">
        <div className="bg-circle circle1"></div>
        <div className="bg-circle circle2"></div>
      </div>
      
      <motion.div 
        className="about-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
      >
        <motion.h2
          className="sectionTittle"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        >
          À propos <span>de moi</span>
        </motion.h2>
        
        <div className="about-container">
          <motion.div
            className="imgContainer"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.8 },
            }}
          >
            <img src="../about.jpg" alt="about" />
            <div className="img-border"></div>
          </motion.div>
          
          <div className="about-info">
            {/* Présentation personnelle */}
            <motion.div 
              className="about-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
            >
              <h3>Développeur Full Stack basé au Maroc</h3>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }}
              >
                Bonjour, je suis Saif Eddine, développeur web avec plus de 2 ans d’expérience.  
                Passionné par la technologie et la résolution de problèmes, je crée des applications modernes, faciles à utiliser et efficaces.  
                Je travaille aussi bien sur le front-end que le back-end, avec pour objectif de progresser et de participer à des projets ambitieux.  
                Je crois fermement que le sérieux et la discipline sont les clés du succès.
              </motion.p>
            </motion.div>
            
            {/* Compétences */}
            <motion.div
              className="about-card skills"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }}
            >
              <h3>Compétences</h3>
              <ul>
                <li>💻 Front-end : React, HTML, CSS, JavaScript</li>
                <li>⚙️ Back-end : Node.js, Express, Laravel</li>
                <li>🗄️ Bases de données : MySQL, MongoDB</li>
                <li>🚀 Outils : Git, Vercel, Postman</li>
                <li>🔧 Résolution de problèmes & méthodes Agile</li>
              </ul>
            </motion.div>
            
            {/* Objectifs professionnels */}
            <motion.div
              className="about-card goals"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } }}
            >
              <h3>Objectifs professionnels</h3>
              <p>
                Mon ambition est de devenir un développeur Full Stack expert et de contribuer à des projets technologiques à fort impact.  
                Je souhaite apprendre continuellement, suivre les évolutions du secteur et atteindre des postes de responsabilité.  
                Mon but est de concevoir des solutions innovantes pour aider les entreprises à grandir et prospérer.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
