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
`;

export default GlobalStyle;
