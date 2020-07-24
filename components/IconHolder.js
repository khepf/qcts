import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from './hero.module.css';

const ANIMATION_DURATION_S = 0.8;

const getVariants = (direction) => ({
  initial: {
    y: direction === "top" ? "-100%" : "100%",
    opacity: 0,
    transition: { duration: ANIMATION_DURATION_S, ease: "easeInOut" },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: ANIMATION_DURATION_S, ease: "easeInOut" },
  },
});

function IconHolder({ icon, text }) {
  return (
    <div className={styles.icon_holder}>
      <AnimatePresence>
        <motion.div
          className={styles.icon_holder_icon}
          key={text + "icon"}
          variants={getVariants("top")}
          initial={"initial"}
          exit={"initial"}
          animate={"animate"}
        >
          <img src={icon.src} alt={icon.alt} />
        </motion.div>
        <motion.h1
          className={styles.icon_holder_text}
          key={text}
          variants={getVariants("bottom")}
          initial={"initial"}
          exit={"initial"}
          animate={"animate"}
        >
          {text}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}

export default IconHolder;
