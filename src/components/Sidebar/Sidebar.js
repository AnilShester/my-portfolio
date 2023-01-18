import React, { useContext } from 'react'
import styles from './Sidebar.module.css'
import { CgClose } from 'react-icons/cg'
import sidebarToggler from '../../context/sidebar-toggle'

function Sidebar(props) {
  const sidebar = useContext(sidebarToggler)

  return (
    <div
      className={
        !sidebar.sidebarToggle ? `${styles.toggler}` : `${styles.sidebar}`
      }
    >
      <div className={styles.sidebar_close} onClick={props.closeSidebar}>
        <CgClose />
      </div>
      <ul className={styles.sidebar_links}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Sidebar
