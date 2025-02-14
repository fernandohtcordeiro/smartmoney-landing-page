import Image from "next/image";
import styled from "styled-components";

export default function CallToActionCards() {
  return (
    <Section>
      <div className="card">
        <div className="icon-container">
          <Image src="/img/icon6.png" alt="Ícone Financeiro" width={40} height={40} />
        </div>
        <h3>Faça parte do mercado <br /> digital financeiro!</h3>
        <p>Pellentesque urna commodo, elementum, est nullam.</p>
        <button className="cta-button primary">Quero ser cliente</button>
      </div>

      <div className="divider"></div>

      <div className="card">
        <div className="icon-container">
          <Image src="/img/icon5.png" alt="Ícone Suporte" width={40} height={40} />
        </div>
        <h3>Um time de suporte incrível <br /> para lhe atender</h3>
        <p>Pellentesque urna commodo, elementum, est nullam.</p>
        <button className="cta-button secondary">Fale conosco</button>
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  padding: 120px 120px;
  background: white;
  color: #1a1a1a;

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 408px;
    gap: 32px;
  }

  .icon-container {
    background: #eef4ff;
    border-radius: 50%;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
  }

  h3 {
    font-family: Archivo;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0%;
    text-align: center;

    
  }

  p {
    font-family: Archivo;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0%;
    text-align: center;

  }

  .cta-button {
    padding: 16px 56px 16px 56px;
    
    cursor: pointer;
    transition: 0.3s;
    
    font-family: Body 16 semi Archivo;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0%;
    text-align: center;

  }

  .primary {
    background: #0070f3;
    color: white;
    border: none;
  }

  .primary:hover {
    background: #0056b3;
  }

  .secondary {
    background: transparent;
    color: #0070f3;
    border: 2px solid #0070f3;
  }

  .secondary:hover {
    background: #0070f3;
    color: white;
  }

  .divider {
    width: 1px;
    height: 340px;
    background: #ddd;
  }
`;
