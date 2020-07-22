import React from "react"
import Link from 'next/link'
import styles from './navbar.module.css'

const NavLinks = () => {
  return (
    <ul className={styles.navlinks}>
      <li>
        <Link href="/" >
          <a className={styles.pagelink}>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/web-design" >
          <a className={styles.pagelink}>Web Design</a>
        </Link>
      </li>
      <li>
        <Link href="/data-analytics" >
          <a className={styles.pagelink}>Data Analytics</a>
        </Link>
      </li>
      <li>
        <Link href="/seo" >
          <a className={styles.pagelink}>SEO</a>
        </Link>
      </li>
      <li>
        <Link href="/links" >
          <a className={styles.pagelink}>Links</a>
        </Link>
      </li>
      <li>
        <Link href="/links" >
          <a className={styles.pagelink}>Contact</a>
        </Link>
      </li>
      
    </ul>
  )
}

export default NavLinks