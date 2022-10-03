import Image from 'next/image';
import React from 'react';
import styles from './Banner.module.css';

function Banner() {
  return (
    <div className={styles.container}>
        <img className='img' src='/imagens/banner.png' alt='Banner' />
    </div>
  )
}

export default Banner;