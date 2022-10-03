import React from "react";
import styles from "./ListaSuspensa.module.css";

const ListaSuspensa = (props) => {
  return (
    <div className={styles.lista}>
      <label>{props.label}</label>
      <select  onChange={evento => props.aoAlterado(evento.target.value)} value={props.valor} required={props.required}>
        <option value=''></option>
        {props.times.map((time) => {
          return <option key={time}>{time}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
