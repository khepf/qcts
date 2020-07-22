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
            <a className={styles.navlogo}><img src="/images/qcts.png" alt="qcts logo"/></a>
          </Link>
          <button className={styles.togglebtn} onClick={toggle}>
            <FaBars />
          </button>
        </div>
        <NavLinks styleClass={styles.navlinks} />
        <Link href="/" >
            <a className={styles.navlogo}><img src="/images/phonenumber.png" alt="513-494-6777"/></a>
          </Link>
      </div>
    </nav>
  }
  
  export default Navbar