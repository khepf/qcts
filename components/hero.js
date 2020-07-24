import React, { useEffect } from "react";
import { useCycle } from "framer-motion";

import ImageHolder from "./ImageHolder";
import IconHolder from "./IconHolder";

import { hedgehogScene, raccoonScene, squirrelScene } from "./scenes";
import styles from './hero.module.css';
const SLIDE_CHANGE_TIME_MS = 5000;

function Hero() {
  const [currentScene, setCurrentScene] = useCycle(
    hedgehogScene,
    raccoonScene,
    squirrelScene
  );

  useEffect(() => {
    const timeOut = setTimeout(setCurrentScene, SLIDE_CHANGE_TIME_MS);
    return () => clearTimeout(timeOut);
  }, [currentScene, setCurrentScene]);

  return (
    <div className={styles.hero}>
      <IconHolder icon={currentScene.icon} text={currentScene.text} />
      {/* <ImageHolder
        img={currentScene.image1}
        className={styles.animal_image, styles.animal_image_one}
      /> */}
      {/* <ImageHolder
        img={currentScene.image2}
        className={styles.animal_image, styles.animal_image_two}
      />
      <ImageHolder
        img={currentScene.image3}
        className={styles.animal_image, styles.animal_image_three}
      /> */}
    </div>
  );
}

export default Hero;