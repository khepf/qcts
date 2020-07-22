import React from 'react'
import NavLinks from './navlinks'
import Link from 'next/link'
import { IoMdClose } from 'react-icons/io'
import styles from './sidebar.module.css'

const Sidebar = ({isOpen, toggle}) => {
  return <aside className={`${styles.sidebar} ${isOpen ? styles.showSidebar : ''}`}>
    <button className={styles.closebtn} onClick={toggle}>
      <IoMdClose />
    </button>
    <div className={styles.sidebarcontainer}>
      <ul className={styles.sidebarlinks}>
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
    </ul>
    </div>
  </aside>
}

export default Sidebar