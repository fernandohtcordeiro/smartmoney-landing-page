import Image from "next/image";
import styled from "styled-components";

export default function Footer() {
    return (
        <FooterContainer>
            <div className="footer-top">
                <div className="newsletter">
                    <div className="newsletter-icon">
                        <Image src="/img/mail fast.svg" alt="Ícone de e-mail" width={32} height={28} />
                    </div>
                    <div className="newsletter-content">
                        <h3>Fique por dentro das novidades</h3>
                        <p>Cadastre seu e-mail para receber conteúdo</p>
                        <div className="newsletter-form">
                            <input type="email" placeholder="Insira seu melhor e-mail" />
                            <button type="submit">Receber Novidades</button>
                        </div>
                    </div>
                </div>



                <div className="footer-links">
                
                    <ul>
                        <li><a href="#">Quero ser cliente</a></li>
                        <li><a href="#">Acessar conta</a></li>
                        <li><a href="#">Dúvidas</a></li>
                        <li><a href="#">Termos e condições</a></li>
                        <li><a href="#">Fale conosco</a></li>
                    </ul>
                </div>

                <div className="footer-social">
                    <h4>Acompanhe nas redes</h4>
                    <ul>
                        <li><Image src="/img/twitter.svg" alt="twitter" width={32} height={32} /><a href="#">Twitter</a></li>
                        <li><Image src="/img/linkedin.svg" alt="LinkedIn" width={32} height={32} /><a href="#">Linkedin</a></li>
                        <li><Image src="/img/instagram.svg" alt="Instagram" width={32} height={32} /><a href="#">Instagram</a></li>
                        <li><Image src="/img/facebook.svg" alt="Facebook" width={32} height={32} /><a href="#">Facebook</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-left">
                    <div className="logo">
                        <Image src="/img/logo-smartmoney-2.png" alt="SmartMoney Logo" width={236} height={37} />
                    </div>
                    <p>© 2022 SmartBusiness. Todos os direitos reservados</p>
                </div>

                <div className="footer-middle">
                    <span>
                        <Image src="/img/tradution.svg" alt="Ícone tradução" width={18} height={18} />
                        Português
                        <Image src="/img/Vector 455.png" alt="Ícone seta" width={10} height={5} />
                    </span>
                </div>

                <div className="footer-right">
                    <p>Desenvolvido por <a href="#">Insany Design</a></p>
                </div>
            </div>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
  background: #0d0f1a;
  color: white;
  padding: 80px 80px 30px 80px;

  .footer-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
  }

  /* Seção da Newsletter */
  .newsletter {
    display: flex;
    flex-direction: column; /* Empilha os elementos em coluna */
    align-items: flex-start; /* Alinha tudo à esquerda */
    gap: 15px;
    max-width: 400px;
}

.newsletter-icon {
    background: rgba(255, 255, 255, 0.1);
    padding: 12px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    flex-shrink: 0;
}

.newsletter-content {
    padding-bottom: 6em;
    text-align: left; /* Mantém os textos alinhados à esquerda */
    font-family: Archivo;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0%;

}

.newsletter-content h3 {
    font-size: 1.2rem;
    font-weight: bold;
}

.newsletter-content p {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
}

/* Mantém o formulário ajustado */
.newsletter-form {
    display: flex;
    width: 100%;
    margin-top: 10px;
    position: relative;
}


.newsletter-form input {
    flex: 1;
    padding: 15px;
    font-size: 16px;
    border: none;
    border-radius: 6px;
    background: rgb(255, 255, 255);
    color: #757385;
    width: 486px; /* Criando espaço para o botão */
}

.newsletter-form input::placeholder {
    color: #757385; /* Altera a cor do texto */
    font-family: 'Arial', sans-serif; /* Define a fonte */
    font-size: 14px; /* Ajusta o tamanho */
    font-weight: 400; /* Peso da fonte */
    opacity: 1; /* Garante que o placeholder fique visível */
}


/* Posicionamento do botão dentro do input */
.newsletter-form button {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    background: #0070f3;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
}

.newsletter-form button:hover {
    background: #0056b3;
}

.footer-social a {
    text-decoration: none;
    color: white;
    transition: 0.3s;
  }

  .footer-social a:hover {
    color: #0070f3;
  }

  .footer-links,
  .footer-social {
    min-width: 200px;
    gap: 24px;
  }

  .footer-links h4,
  .footer-social h4 {
    font-family: Archivo;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    
  }

  .footer-links ul,
  .footer-social ul {
    font-family: Archivo;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    
  }

  .footer-links li,
  .footer-social li {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .footer-links a {
    text-decoration: none;
    color: white;
    transition: 0.3s;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .footer-links a:hover {
    color: #0070f3;
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 15px;
  }

  /* Alinha a logo e o texto à esquerda */
  .footer-left {
    display: flex;
    align-items: center;
    gap: 180px;
  }

  .footer-left p {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
  }

  /* Centraliza o seletor de idioma */
  .footer-middle {
    display: flex;
    align-items: center;
  }

  .footer-middle span {
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    cursor: pointer;
  }

  /* Alinha o crédito à direita */
  .footer-right p {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
  }

  .footer-right a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    transition: 0.3s;
  }

  .footer-right a:hover {
    text-decoration: underline;
    color: #0070f3;
  }
`;
