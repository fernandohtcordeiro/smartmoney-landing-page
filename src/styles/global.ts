import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: #f8f9fa;
    color: #333;
  }

  /* ========== HEADER ========== */
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 40px;
    background: #fff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  }

  .logo-container {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .logo-container h1 {
    font-size: 20px;
    font-weight: 600;
    color: #1a1a1a;
  }

  .logo-container h1 span {
    color: #0070f3;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  nav a {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    transition: 0.3s;
  }

  nav a:hover {
    color: #0070f3;
  }

  .register-button {
    background: #0070f3;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: 600;
    text-decoration: none;
    transition: 0.3s;
  }

  .register-button:hover {
    background: #0056b3;
  }

  /* ========== HERO SECTION ========== */
  .hero-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 100px 40px;
    background: #0a0f1b;
    color: white;
  }

  .hero-content {
    max-width: 50%;
  }

  .hero-content h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .hero-content p {
    font-size: 1.2rem;
    color: #b0b3c1;
  }

  .hero-stats {
    display: flex;
    gap: 40px;
    margin-top: 30px;
  }

  .hero-stats div {
    text-align: center;
  }

  .hero-stats h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #ffffff;
  }

  .hero-stats p {
    font-size: 1rem;
    color: #b0b3c1;
  }

  /* ========== REGISTER FORM ========== */
  .register-form-container {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
  }

  .register-form-title {
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .register-form-input {
    width: 100%;
    padding: 12px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }

  .register-form-radio-group {
    display: flex;
    gap: 20px;
    margin: 10px 0;
  }

  .register-form-button {
    width: 100%;
    padding: 12px;
    background: #0070f3;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    margin-top: 10px;
  }

  .register-form-button:hover {
    background: #0056b3;
  }
  
    /* ========== SOLUTIONS SECTION ========== */
    .solutions-section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px 80px;
    gap: 80px;
    background: #fff;
  }

  .solutions-content {
    max-width: 45%;
  }

  .solutions-content h2 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 15px;
    line-height: 1.2;
  }

  .solutions-content p {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 20px;
    line-height: 1.6;
  }

  .solutions-list {
    list-style: none;
    padding: 0;
    margin-bottom: 20px;
  }

  .solutions-list li {
    font-size: 1rem;
    color: #333;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .solutions-list li::before {
    content: "✔";
    color: #0070f3;
    font-weight: bold;
  }

  .solutions-button {
    display: inline-block;
    padding: 14px 24px;
    background: #0070f3;
    color: white;
    text-decoration: none;
    font-weight: bold;
    border-radius: 8px;
    transition: 0.3s;
    margin-top: 20px;
    font-size: 1rem;
  }

  .solutions-button:hover {
    background: #0056b3;
  }

  /* Estilizando a Imagem com borda azul */
  .solutions-image {
    position: relative;
    max-width: 45%;
    padding: 15px;
    background: rgba(0, 112, 243, 0.1);
    border-radius: 20px;
  }

  .solutions-image img {
    border-radius: 10px;
    width: 100%;
    height: auto;
  }

  /* Caixa de saldo e avatares */
  .balance-box {
    position: absolute;
    bottom: -15px;
    left: 15px;
    background: white;
    padding: 10px 15px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.9rem;
  }

  .balance-box span {
    font-weight: bold;
    color: #333;
  }

  .avatar-group {
    display: flex;
  }

  .avatar-group img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid white;
    margin-left: -8px;
  }

    /* ========== BENEFITS SECTION ========== */
    .benefits-section {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 60px 80px;
    background: #fff;
    gap: 20px;
  }

  .benefit-item {
    text-align: center;
    max-width: 25%;
  }

  .benefit-icon {
    background: rgba(0, 112, 243, 0.1);
    padding: 15px;
    border-radius: 10px;
    display: inline-block;
    margin-bottom: 15px;
  }

  .benefit-item h3 {
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .benefit-item p {
    font-size: 1rem;
    color: #666;
    line-height: 1.5;
  }
    /* ========== BLOG SECTION ========== */
    .blog-section {
    padding: 80px 40px;
    background: #f1f5f9;
    text-align: left;
    position: relative;
  }

  .blog-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    position: relative;
  }

  .blog-subtitle {
    font-size: 1rem;
    color: #0070f3;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .blog-section h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #1a1a1a;
  }

  .blog-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .blog-card:hover {
    transform: translateY(-5px);
  }

  .blog-content {
    padding: 15px;
  }

  .blog-category {
    font-size: 0.9rem;
    color: #0070f3;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .blog-category .blue-text {
    color: #0070f3;
  }

  .blog-card h3 {
    font-size: 1.1rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }

  .blog-author {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 15px;
  }

  .blog-author img {
    border-radius: 50%;
  }

  .blog-author-name {
    font-size: 0.95rem;
    font-weight: bold;
  }

  .blog-author-role {
    font-size: 0.8rem;
    color: #777;
  }

  /* Posicionamento correto das setas */
  .blog-navigation {
    display: flex;
    gap: 5px;
    align-items: center;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .swiper-button-prev,
  .swiper-button-next {
    background: none;
    border: none;
    cursor: pointer;
    transition: opacity 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-button-prev img,
  .swiper-button-next img {
    width: 18px;
    height: 18px;
  }

  /* Correção para que o Swiper.js reconheça os botões */
  .swiper-button-prev::after,
  .swiper-button-next::after {
    content: none !important;
  }

  /* Paginação */
  .swiper-pagination {
    margin-top: 20px;
    text-align: center;
    position: relative !important;
    z-index: 10;
  }

  .swiper-pagination-bullet {
    background: #0070f3;
    opacity: 0.5;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
  }




`;



export default GlobalStyle;

