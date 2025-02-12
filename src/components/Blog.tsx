import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const blogPosts = [
  {
    image: "/img/blog-image.jpg",
    category: "Business",
    date: "Outubro 2021",
    title: "Sollicitudin a sagittis, risus nisl, fermentum, tincidunt dolor",
    author: "Savannah Nguyen",
    authorImage: "/img/avatar1.png",
  },
  {
    image: "/img/blog-image.jpg",
    category: "Business",
    date: "Outubro 2021",
    title: "Sollicitudin a sagittis, risus nisl, fermentum, tincidunt dolor",
    author: "Savannah Nguyen",
    authorImage: "/img/avatar1.png",
  },
  {
    image: "/img/blog-image.jpg",
    category: "Business",
    date: "Outubro 2021",
    title: "Sollicitudin a sagittis, risus nisl, fermentum, tincidunt dolor",
    author: "Savannah Nguyen",
    authorImage: "/img/avatar1.png",
  },
  {
    image: "/img/blog-image.jpg",
    category: "Business",
    date: "Outubro 2021",
    title: "Sollicitudin a sagittis, risus nisl, fermentum, tincidunt dolor",
    author: "Savannah Nguyen",
    authorImage: "/img/avatar1.png",
  },
  {
    image: "/img/blog-image.jpg",
    category: "Business",
    date: "Outubro 2021",
    title: "Outro post para testar paginação",
    author: "Savannah Nguyen",
    authorImage: "/img/avatar1.png",
  },
];

export default function Blog() {
  return (
    <section className="blog-section">
      {/* Cabeçalho com título e setas corretamente posicionadas */}
      <div className="blog-header">
        <div className="blog-header-left">
          <h4 className="blog-subtitle">Nosso blog</h4>
          <h2 className="blog-title">Notícias do mundo da tecnologia</h2>
        </div>
        <div className="blog-navigation">
          <button className="swiper-button-prev">
            <Image src="/icons/arrow-left.svg" alt="Voltar" width={18} height={18} />
          </button>
          <button className="swiper-button-next">
            <Image src="/icons/arrow-right.svg" alt="Avançar" width={18} height={18} />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={4}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true, // Ativa bolinhas dinâmicas apenas quando necessário
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {blogPosts.map((post, index) => (
          <SwiperSlide key={index}>
            <div className="blog-card">
              <Image src={post.image} alt={post.title} width={280} height={200} />
              <div className="blog-content">
                <p className="blog-category">
                  <span className="blue-text">{post.category}</span> - {post.date}
                </p>
                <h3>{post.title}</h3>
                <div className="blog-author">
                  <Image src={post.authorImage} alt={post.author} width={35} height={35} />
                  <div>
                    <span className="blog-author-name">{post.author}</span>
                    <p className="blog-author-role">Autor</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Paginação abaixo do carrossel */}
      <div className="swiper-pagination"></div>
    </section>
  );
}
