import React from "react";
import styles from "./styles/page.module.css";

import Header from "../components/Header/Header.jsx";

export default function Home() {

  return (
    <div className={styles.containerGeral}>
      
      <Header />

    </div>
  )

}






  /*const [pessoas, setPessoas] = useState ([
    {nome: "Nathalia Santos", email: "nathsanfer@gmail.com", idade: "17", profissao: "Desenvolvedora Full-Stack"},
    {nome: "João Silva", email: "joao.silva@gmail.com", idade: "30", profissao: "Engenheiro de Software"},
    {nome: "Maria Oliveira", email: "maria.oliveira@gmaill.com", idade: "25", profissao: "Designer Gráfico"},
    {nome: "Carlos Pereira", email: "carlos.pereira@gmail.com", idade: "28", profissao: "Gerente de Projetos"},
    {nome: "Ana Costa", email: "ana.costa@gmail.com", idade: "22", profissao: "Analista de Dados"},
    {nome: "Lucas Almeida", email: "lucas.almeida@gmail.com", profissao: "Especialista em Marketing Digital"},
  ]); */

 /* {pessoas.map((pessoa, index) => (
          <CardPessoa
            key={index}
            nome={pessoa.nome}
            email={pessoa.email}
            idade={pessoa.idade}
            profissao={pessoa.profissao}
          />
        ))} */