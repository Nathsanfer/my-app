import React from "react";
import styles from "./ProductCard.module.css";

export default function ProductCard({ linkImage, imageAlt, nomeProduto, preco, descricao, totalAvaliacoes}) {

    const precoExibido = preco ? `R$ ${preco}` : "Valor ainda não definido";
    const avaliacaoExibida = totalAvaliacoes ? totalAvaliacoes : "Ainda não há avaliações";

    return (
        <div className={styles.productCard}>
            <div className={styles.productImage}>
                <img
                    src={linkImage}
                    alt={imageAlt}
                    width={500}
                    height={200}
                />
            </div>
            <h2 className={styles.productTitle}>{nomeProduto}</h2>
            <p className={styles.productPrice}>{precoExibido}</p>
            <p className={styles.productDescription}>{descricao}</p>
            <div className={styles.productRating}>
                <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                <span>{avaliacaoExibida}</span>
            </div>
        </div>
    )

}