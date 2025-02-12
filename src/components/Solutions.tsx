import Image from 'next/image';
import Link from 'next/link';

export default function Solutions() {
  return (
    <section className="solutions-section">
      <div className="solutions-content">
        <h2>Conheça nossas soluções personalizadas</h2>
        <p>
          Suporte especializado para te auxiliar e tornar o modelo financeiro 
          da sua empresa muito mais eficiente. Tudo isso com um toque digital.
        </p>

        <ul className="solutions-list">
          <li>Logística de pagamentos integrada</li>
          <li>Segurança e privacidade dos seus dados</li>
          <li>Gestão financeira simplificada</li>
        </ul>

        <Link href="#" className="solutions-button">
          Damos o suporte
        </Link>
      </div>

      <div className="solutions-image">
        <Image 
          src="/img/woman.png" 
          alt="Mulher utilizando serviços bancários" 
          width={400} 
          height={400} 
          objectFit="cover"
        />
        {/* Caixa de Saldo e Avatares */}
        <div className="balance-box">
          <span>R$ 999,90</span>
          <div className="avatar-group">
            <Image src="/img/avatare1.png" alt="User 1" width={35} height={35} />
            <Image src="/img/avatare2.png" alt="User 2" width={35} height={35} />
            <Image src="/img/avatare3.png" alt="User 3" width={35} height={35} />
            <Image src="/img/avatare3.png" alt="User 3" width={35} height={35} />
          </div>
        </div>
      </div>
    </section>
  );
}
