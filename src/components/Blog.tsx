import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getBlogPosts } from "../services/api"; // Importa a função que criamos

// Definição do tipo para os posts
type BlogPost = {
  id: string;
  title: string;
  date: string;
  image: string;
  author: string;
  authorImage: string;
};

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    async function fetchData() {
      const blogPosts = await getBlogPosts();
      setPosts(blogPosts);
    }
    fetchData();
  }, []);

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
            <Image src="/img/Vector453.png" alt="Voltar" width={18} height={18} />
          </button>
          <button className="swiper-button-next">
            <Image src="/img/Vector452.png" alt="Avançar" width={18} height={18} />
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
          dynamicBullets: true,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {posts.length === 0 ? (
          <p>Carregando posts...</p>
        ) : (
          posts.map((post) => (
            <SwiperSlide key={post.id}>
              <div className="blog-card">
                <Image src={post.image} alt={post.title} width={280} height={340} />
                <div className="blog-content">
                  <p className="blog-category">
                    <span className="blue-text">Tecnologia</span> - {post.date}
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
          ))
        )}
      </Swiper>

      {/* Paginação abaixo do carrossel */}
      <div className="swiper-pagination"></div>
    </section>
  );
}
