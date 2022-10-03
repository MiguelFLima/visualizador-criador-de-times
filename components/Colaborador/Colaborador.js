import React from 'react';
import styles from './Colaborador.module.css';

const Colaborador = ({nome, imagem, cargo, corDeFundo}) => {
  return (
    <div className={styles.colaborador}>

      <div className={styles.colaboradorCabecalho} style={{backgroundColor: corDeFundo}}>
        <img src={imagem} alt={nome} />
      </div>

      <div className={styles.colaboradorRodape}>
        <h4 className={styles.colaboradorRodapeh4}>{nome}</h4>
        <h5 className={styles.colaboradorRodapeh5}>{cargo}</h5>
      </div>

    </div>
  )
}

export default Colaborador;