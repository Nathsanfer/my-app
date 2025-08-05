import React from "react";
import styles from "./styles/CardPessoa.module.css"; 

export default function CardPessoa({nome, email, idade, profissao}) {

    const nomeExibido = nome ? nome : "Nome não informado";
    const emailExibido = email ? email : "Email não informado";
    const idadeExibida = idade ? `${idade} anos de idade` : "Idade não informada";
    const profissaoExibida = profissao ? profissao : "Profissão não informada";

  return (
    <div className={styles.card}>

      <h4 className={styles.titulo}>{nomeExibido}</h4>
      <p className={styles.texto}>{emailExibido}</p>
      <p className={styles.texto}>{idadeExibida}</p>
      <p className={styles.texto}>{profissaoExibida}</p>

    </div>
  )
}