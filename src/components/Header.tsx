import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={isScrolled ? "header scrolled" : "header"}>
      <div className="logo-container">
        <Image src="/img/icon.svg" alt="SmartMoney Logo" width={30} height={30} />
        <h1>Smart<span>Money</span></h1>
      </div>
      <nav>
        <a href="#">Quem somos</a>
        <a href="#">Soluções</a>
        <a href="#">Câmbio</a>
        <a href="#">Contato</a>
        <a href="#">Suporte</a>
      </nav>
      <a href="#" className="register-button">Cadastre-se</a>
    </header>
  );
}
