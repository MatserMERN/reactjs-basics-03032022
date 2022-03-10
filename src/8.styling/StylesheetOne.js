import React from 'react'
import './appStyle.css'
import styles from './appStyle.module.css'

function StylesheetOne() {
  return (
    <div>
        <h1 className="error">This will use regular CSS</h1>
        <br />
        <h1 className={styles.error}>This will use module CSS</h1>
    </div>
  )
}

export default StylesheetOne