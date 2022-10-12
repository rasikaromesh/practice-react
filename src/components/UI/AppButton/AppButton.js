import React from 'react'
import styles from './AppButton.module.css';

const AppButton = (props) => {
  return (
    <button className={styles.button}>{props.lable}</button>
  )
}

export default AppButton