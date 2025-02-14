import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

const faqData = [
  { question: "Quais recursos ainda posso acessar nas novas Páginas?", answer: "Turpis at malesuada orci ultricies ipsum amet sed cras. Enim ut urna feugiat ultrices semper quisque at. Viverra lectus ut a gravida aliquet cras est lectus ullamcorper. Elementum diam iaculis neque arcu, aliquet consectetur.", id: 1 },
  { question: "Como faço para abrir a minha nova Página?", answer: "Basta acessar as configurações e seguir o passo a passo para ativação.", id: 2 },
  { question: "Há algum conteúdo que não migrará com a minha Página?", answer: "Sim, alguns dados precisam ser configurados manualmente.", id: 3 },
  { question: "Como as pessoas encontrarão a minha nova Página?", answer: "Sua página estará indexada nos mecanismos de busca automaticamente.", id: 4 },
  { question: "O que é o Feed? Como faço para configurá-lo?", answer: "O Feed é um espaço para atualizações e pode ser configurado nas preferências da conta.", id: 5 },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Section>
      <div className="faq-left">
        <h4>Tire suas dúvidas</h4>
        <h2>Perguntas mais frequentes</h2>
        <p>Separamos algumas perguntas e respostas que podem te ajudar na sua decisão</p>
        
        {/* Substituindo os emojis pelos ícones PNG */}
        <div className="faq-links">
          <div className="faq-link">
            <Image src="/img/icon9.png" alt="Ícone Dúvidas" width={30} height={30} />
            <div>
              <h3>Dúvidas?</h3>
              <p>Envie uma mensagem para nosso time</p>
            </div>
          </div>
          <div className="faq-link">
            <Image src="/img/icon8.png" alt="Ícone Faça parte" width={30} height={30} />
            <div>
              <h3>Faça parte</h3>
              <p>Cadastre-se para transformar sua empresa</p>
            </div>
          </div>
          <div className="faq-link">
            <Image src="/img/icon7.png" alt="Ícone Chama no zap" width={30} height={30} />
            <div>
              <h3>Chama no zap</h3>
              <p>Fale com nosso comercial</p>
            </div>
          </div>
        </div>
      </div>

      <div className="faq-right">
        {faqData.map((item) => (
          <div key={item.id} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(item.id)}>
              <span className="faq-number">{item.id < 10 ? `0${item.id}` : item.id}</span>
              <p>{item.question}</p>
              <button className="faq-toggle">{openId === item.id ? "−" : "+"}</button>
            </div>
            {openId === item.id && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 120px 120px 112px 112px; /* Reduzi o padding */
  background: #F2F5FC;
  gap: 30px; /* Reduzi o gap */

  .faq-left {
    max-width: 38%; /* Ajustei um pouco o tamanho */
    font-family: Archivo;

  }

  .faq-right {
    max-width: 60%; /* Ajustei para ocupar melhor o espaço */
    padding: 15px; /* Reduzi o padding interno */
    font-family: Archivo;
  }

  h4 {
    font-size: 1rem;
    color: #888;
    margin-bottom: 5px;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #1a1a1a;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #555;
  }

  .faq-links {
    margin-top: 20px;
  }

  .faq-link {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px;
    border-radius: 8px;
    transition: 0.3s;
  }

  .faq-link img {
    width: 30px;
    height: 30px;
  }

  .faq-link h3 {
    font-size: 1rem;
    font-weight: bold;
  }

  .faq-link p {
    font-size: 0.9rem;
    color: #666;
  }

  /* Estilo das Perguntas */
  .faq-right {
    max-width: 44%;
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  }

  .faq-item {
    border-bottom: 1px solid #e0e0e0;
    padding: 15px 0;
  }

  .faq-question {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition: 0.3s;
    gap: 24px;
  }

  .faq-number {
    font-size: 1rem;
    color: #0070f3;
    font-weight: bold;
  }

  .faq-toggle {
    background: none;
    border: none;
    font-size: 16px;
    
    cursor: pointer;
  }
  .faq-answer {
  width: 100%; /* Garante que não ultrapasse a largura */
  max-width: 100%; /* Evita expansão lateral */
  overflow: hidden; /* Impede que saia do contêiner */
  padding: 10px 15px; /* Adiciona um espaço interno */
  font-size: 0.9rem;
  color: #333;
  background: #f8fafd; /* Cor sutil de fundo para destaque */
  border-radius: 6px; /* Suaviza as bordas */
}


  .faq-question {
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.3s;
  gap: 12px; /* Ajuste fino do espaçamento */
}

.faq-number {
  font-size: 1rem;
  color: #0070f3;
  font-weight: bold;
  min-width: 30px; /* Mantém alinhado */
  text-align: right;
}

.faq-question p {
  flex: 1; /* Mantém o texto alinhado corretamente */
  font-size: 1rem;
  font-weight: 500;
  color: #333;
}

`;
