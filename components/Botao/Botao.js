import styles from './Botao.module.css';

import React from 'react'

const Botao = (props) => {
  return (
    <button className={styles.btn}>
        {props.children}
    </button>
  )
}

export default Botao