import Colaborador from "../Colaborador/Colaborador";
import styles from "./Time.module.css";

const Time = (props) => {
  return (
    props.colaboradores.length > 0 && 
    <section
      className={styles.time}
      style={{ backgroundColor: props.corSecundaria }}
    >
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className={styles.colaboradores}>
      {props.colaboradores.map((colaborador) => (
        <Colaborador 
          key={colaborador.nome} 
          nome={colaborador.nome}  
          cargo={colaborador.cargo}
          imagem={colaborador.imagem}  
          corDeFundo={props.corPrimaria}
        /> 
        ))}
      </div>
    </section>
  );
};

export default Time;
