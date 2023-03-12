import React from 'react'
import styles from './Button.module.css'

const Button = ({ text, usernameClick }) => {
    return (
        <button onClick={usernameClick} className={styles.button}>
            <span>{text}</span>
            <img className={styles.arrow} src="./images/arrow-forward.png" alt="arrow" />
        </button>
    )
}

export default Button