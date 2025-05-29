import { motion } from "framer-motion";
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
      
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    x:0,
    opacity: 1,
  },
  closed: {
    y: 50,
   
    opacity: 0,
  },
};

const Links = ({setOpen}) => {
  const items = ["Home", "Skills", "About", "Projects", "Contact"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item, i) => {
        return (
          <motion.a variants={itemVariants} key={i} href={`#${item}`} whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={()=>setOpen(false)}>
            {item}
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default Links;
