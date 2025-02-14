import Image from "next/image";
import styled from "styled-components";

export default function ExclusiveAdvantages() {
  return (
    <Section>
      <div className="cta-container">
        <button className="cta-button">Quero ser cliente</button>
      </div>

      <div className="content">
        <h2>03 vantagens exclusivas da SmartMoney</h2>
        <div className="advantages">
          <div className="advantage-card">
            <h3>Tecnologia de ponta</h3>
            <p>Plataforma segura, confiável e digital, ligada à inteligência artificial.</p>
            <div className="card-border"></div>
          </div>
          <div className="advantage">
            <h3>Entrega eficiente</h3>
            <p>Possuem soluções seguras e prontas para seus negócios.</p>
          </div>
          <div className="advantage">
            <h3>Suporte especializado</h3>
            <p>Nossa equipe está sempre disponível para ajudar no que for necessário.</p>
          </div>
        </div>
      </div>

      <div className="image-container">
        <div className="woman-wrapper">
          <Image
            src="/img/foto2.png"
            alt="Mulher usando smartphone"
            width={282}
            height={402}
            className="woman-image"
          />
          <div className="floating-label">
            <Image
              src="/img/Vector 1274.svg"
              alt="Ícone de estrela"
              width={16}
              height={16}
              className="icon"
            />
            <span className="label">Tecnologia disruptiva</span>
          </div>
        </div>
        <div className="illustration">
          <Image
            src="/img/foto1.png"
            alt="Ilustração de dados"
            width={281}
            height={427}
          />
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 80px; /* Ajuste de espaçamento superior e inferior */
  background: #0D0F1A;
  color: white;
  gap: 100px;
  position: relative;
  height: 994px; /* Altura exata conforme o Figma */
  overflow: hidden; /* Evita que elementos ultrapassem a seção */

  .cta-container {
    position: absolute;
    top: 50px;
    left: 1065px; /* Exatamente como no Figma */
  }

  .cta-button {
    padding: 12px 24px;
    font-size: 1rem;
    color: white;
    background: #0070f3;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
  }

  .cta-button:hover {
    background: #0056b3;
  }

  .content {
    flex: 1;
    position: relative;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 30px;
  }

  .advantages {
    margin-top: 20px;
  }

  .advantage {
    margin-bottom: 25px;
  }

  .advantage-card {
    background: white;
    color: black;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 8px 20px rgba(255, 255, 255, 0.05);
    position: relative;
    width: 340px;
    margin-bottom: 30px;
  }

  .card-border {
    position: absolute;
    bottom: -4px;
    left: 10px;
    width: 90%;
    height: 3px;
    background: #0070f3;
    border-radius: 2px;
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 8px;
  }

  p {
    font-size: 1rem;
    color: #ccc;
  }

  .image-container {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 20px;
  }

  .woman-wrapper {
    position: relative;
    margin-top: 40px; /* Abaixa a imagem da mulher */
  }

  .woman-image {
    border-radius: 8px;
    box-shadow: 0px 4px 15px rgba(255, 255, 255, 0.1);
  }

  .floating-label {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    background: #252836;
    padding: 10px 20px;
    border-radius: 50px;
    color: #b0b0b0;
    font-size: 0.9rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%; /* Agora ocupa toda a caixa */
    justify-content: center;
    box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.1);
  }

  .icon {
    width: 16px;
    height: 16px;
  }

  .illustration {
    position: relative;
    margin-top: 40px; /* Abaixa a ilustração */
  }
`;
