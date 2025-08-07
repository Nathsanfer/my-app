import React from "react";
import Link from "next/link";
import styles from "./styles/not-found.module.css";

export default function NotFound() {

  return (
    <div className={styles.containerGeral}>
      <div className={styles.container}>
        <img
          src="https://lojaintegrada.com.br/hub//wp-content/uploads/2023/05/erro-404-1024x684.webp"
          alt="404"
          width={400}
          height={300}
        />
        <h2 className={styles.title}>A página que você deseja acessar está fora do ar!!</h2>
        <p className={styles.subtitle}>Tente novamente mais tarde.</p>
        <Link href="/">
          <button className={styles.button}>Voltar a tela inicial</button>
        </Link>
      </div>
    </div>
  )
}     