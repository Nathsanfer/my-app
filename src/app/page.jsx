"use client";

import React from "react";
import { useState } from "react";
import styles from "./styles/page.module.css";

import Header from "../components/Header/Header.jsx";
import ProductCard from "../components/Productcard/ProductCard.jsx";

export default function Home() {

  const [products, setProducts] = useState ([
    {
      linkImage: "https://www.iplacecorp.com.br/ccstore/v1/images/?source=/file/v8907005764182712947/products/226680.00.638517949845625598-apple-iphone-15-pro-512gb-titanio-natural-mtv93be.jpg&height=475&width=475",
      imageAlt: "iPhone 15 Pro",
      nomeProduto: "iPhone 15 Pro",
      preco: "8.999,00",
      descricao: "O mais avançado iPhone já criado, com chip A17 Pro e sistema de câmeras profissional.",
      totalAvaliacoes: "(4.8) - 1.234 avaliações"  
    },
    {
      linkImage: "https://image-us.samsung.com/SamsungUS/home/smartphones/galaxy-s24-ultra-crn/01_SDSAC-9167-S24F_CRN-800x600.jpg?$product-details-jpg$",
      imageAlt: "Samsung Galaxy S24 Ultra",
      nomeProduto: "Samsung Galaxy S24 Ultra 512GB",
      preco: "7.499,00",
      descricao: "Galaxy AI revolucionário, S Pen integrada e câmera de 200MP para fotos incríveis.",
      totalAvaliacoes: "(4.7) - 987 avaliações"  
    },
    {
      linkImage: "https://http2.mlstatic.com/D_NQ_NP_755622-MLA73279643202_122023-O.webp",
      imageAlt: "MacBook Pro",
      nomeProduto: "MacBook Pro 14 M3 Pro 18GB",
      preco: "15.999,00",
      descricao: "Performance profissional com chip M3 Pro, tela Liquid Retina XDR e bateria de longa duração.",
      totalAvaliacoes: "(4.9) - 2.156 avaliações" 
    },
    {
      linkImage: "https://i.zst.com.br/thumbs/12/8/e/-770570251.jpg",
      imageAlt: "Dell XPS 13 Intel i7 16GB SSD 512GB",
      nomeProduto: "Dell XPS 13 Intel i7 16GB SSD 512GB",
      preco: "6.799,00",
      descricao: "Ultrabook premium com design ultrafino, tela InfinityEdge e performance excepcional.",
      totalAvaliacoes: "(4.6) - 543 avaliações" 
    },
    {
      linkImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR22w0GvbHDN-IhDetaRIilupDDuLWrPV8NTw&s",
      imageAlt: "iPad Pro 12.9 M2 WiFi 128GB",
      nomeProduto: "iPad Pro 12.9 M2 WiFi 128GB",
      preco: "7.299,00",
      descricao: "O tablet mais poderoso do mundo com chip M2, tela Liquid Retina XDR e suporte ao Apple Pencil.",
      totalAvaliacoes: "(4.8) - 1.876 avaliações" 
    },
    {
      linkImage: "https://samsungbrshop.vtexassets.com/arquivos/ids/221578/Galaxy-Tab-S9-Plus_Graphite_Product-Image_Combo.jpg?v=638878454858470000",
      imageAlt: "Samsung Galaxy Tab S9+ 256GB",
      nomeProduto: "Samsung Galaxy Tab S9+ 256GB",
      preco: "4.999,00",
      descricao: "ablet premium Android com S Pen incluída, tela Dynamic AMOLED 2X e resistência à água.",
      totalAvaliacoes: "(4.5) - 432 avaliações" 
    }
  ])

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