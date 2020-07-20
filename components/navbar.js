import React from 'react'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
import NavLinks from './navlinks'
import styles from './navbar.module.css'

const Navbar = ({ toggle }) => {
    return <nav className={styles.navbar}>
      <div className={styles.navcenter}>
        <div className={styles.navheader}>
          <Link href="/" >
            <a className={styles.navlogo}>qcts</a>
          </Link>
          <button className={styles.togglebtn} onClick={toggle}>
            <FaBars />
          </button>
        </div>
        <NavLinks styleClass={styles.navlinks} />
      </div>
    </nav>
  }
  
  export default Navbar