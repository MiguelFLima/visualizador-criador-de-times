import React from 'react';
import styles from './Rodape.module.css';

const Rodape = () => {
  return (
    <div className={styles.containerFooter}>

        <div className={styles.icones}>
            <img src='/imagens/fb.png' alt='Icone fb' />
            <img src='/imagens/tw.png' alt='Icone twt' />
            <img src='/imagens/ig.png' alt='Icone insta' />
        </div>

        <img className={styles.img} src='/imagens/logo.png' alt='Logo'/>

        <p className={styles.dev}>Desenvolvido Por Miguel | 2022 </p>
    </div>
  )
}

export default Rodape