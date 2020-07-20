import React from "react"
import Link from 'next/link'
import styles from './navbar.module.css'

const NavLinks = ({ styleClass }) => {
  return (
    <ul className={styles.navlinks}>
      <li>
        <Link href="/" >
          <a className={styles.pagelink}>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/links" >
          <a className={styles.pagelink}>Links</a>
        </Link>
      </li>
    </ul>
  )
}

export default NavLinks