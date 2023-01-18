import React from 'react'
import styles from './Nav.module.css'

function Nav(props) {
  const classes = `${styles.navbar} ${props.className}`
  return <nav className={classes}>{props.children}</nav>
}

export default Nav
