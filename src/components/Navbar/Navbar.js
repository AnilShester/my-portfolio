import React, { useState } from 'react'
import Nav from '../UI/Nav'
import Sidebar from '../Sidebar/Sidebar'
import { GiHamburgerMenu } from 'react-icons/gi'
import styles from './Navbar.module.css'
import sidebarToggler from '../../context/sidebar-toggle'

function Navbar() {
  const [sidebarToggle, setSidebarToggle] = useState(false)

  const sidebarToggleHandler = () => {
    setSidebarToggle(!sidebarToggle)
  }

  return (
    <sidebarToggler.Provider
      value={{
        sidebarToggle: sidebarToggle,
      }}
    >
      <Nav>
        <div className={styles.navbar_logo}> Logo </div>
        <div className={styles.navbar_burger} onClick={sidebarToggleHandler}>
          <GiHamburgerMenu className={styles.burger} />
        </div>

        <ul className={styles.navbar_links}>
          <li>
            <a href=""> Home </a>
          </li>
          <li>
            <a href=""> About </a>
          </li>
          <li>
            <a href=""> Projects </a>
          </li>
          <li>
            <a href=""> Contact </a>
          </li>
        </ul>

        <Sidebar closeSidebar={sidebarToggleHandler} />
      </Nav>
    </sidebarToggler.Provider>
  )
}

export default Navbar
