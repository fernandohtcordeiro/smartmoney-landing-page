import Image from 'next/image';

const benefitsData = [
  {
    icon: "/img/icone1.png",
    title: "Fim da complexidade",
    description: "Facilidade no uso sem burocracia. Otimize suas operações e reduza processos.",
  },
  {
    icon: "/img/icone2.png",
    title: "Sem burocracia",
    description: "Acesso rápido e sem complicações. Elimine a papelada e acelere sua rotina.",
  },
  {
    icon: "/img/icone3.png",
    title: "Tudo digital",
    description: "Gerencie tudo online, de forma segura e intuitiva, sem precisar sair de casa.",
  },
  {
    icon: "/img/icone4.png",
    title: "Evolução constante",
    description: "Atualizações frequentes garantem que sua experiência seja sempre a melhor.",
  },
];

export default function Benefits() {
  return (
    <section className="benefits-section">
      {benefitsData.map((benefit, index) => (
        <div className="benefit-item" key={index}>
          <div className="benefit-icon">
            <Image src={benefit.icon} alt={benefit.title} width={50} height={50} />
          </div>
          <h3>{benefit.title}</h3>
          <p>{benefit.description}</p>
        </div>
      ))}
    </section>
  );
}
