"use client";

import React from "react";
import { useState } from "react";
import styles from "./styles/page.module.css";

import Header from "../components/Header/Header.jsx";
import ProductCard from "../components/Productcard/ProductCard.jsx";

export default function Home() {

  

  return (
    <div className={styles.containerGeral}>
      
      <Header />

      <div className={styles.products}>
        
        {products.map((product, index) => (
          <ProductCard
          key={index}
          linkImage={product.linkImage}
          imageAlt={product.imageAlt}
          nomeProduto={product.nomeProduto}
          preco={product.preco}
          descricao={product.descricao}
          totalAvaliacoes={product.totalAvaliacoes}
          />
        ))}

      </div>

    </div>
  )

}