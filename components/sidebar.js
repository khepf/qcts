import React from 'react'
import NavLinks from './navlinks'
import Link from 'next/link'
import { IoMdClose } from 'react-icons/io'
import styles from './sidebar.module.css'

const Sidebar = ({isOpen, toggle}) => {
  return <aside className={`${styles.sidebar} ${isOpen ? styles.showSidebar : ''}`}>
    <button className='closebtn' onClick={toggle}>
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
        <Link href="/links" >
          <a className={styles.pagelink}>Links</a>
        </Link>
      </li>
    </ul>
    </div>
  </aside>
}

export default Sidebar