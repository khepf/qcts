import React from "react"
import styles from './hero.module.css'

const Hero = () => {
    return <header className={styles.hero}>
        <img 
        src="/images/qcts-square.png" 
        alt="qcts hero image" 
        className={styles.qctsimg} 
        ></img>
    </header>
}

export default Hero