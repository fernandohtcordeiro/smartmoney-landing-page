const GRAPHQL_ENDPOINT = "https://devblog.insanydesign.com/graphql";

// Definição do tipo dos posts
type BlogPost = {
  id: string;
  title: string;
  date: string;
  image: string;
  author: string;
  authorImage: string;
};

export async function getBlogPosts(): Promise<BlogPost[]> {
  const query = `
    query {
      posts {
        nodes {
          id
          title
          date
          content
          featuredImage {
            node {
              sourceUrl
            }
          }
          author {
            node {
              name
              avatar {
                url
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });

    const { data } = await response.json();

    return data?.posts?.nodes?.map((post: { id: any; title: any; date: string | number | Date; featuredImage: { node: { sourceUrl: any; }; }; author: { node: { name: any; avatar: { url: any; }; }; }; }) => ({
      id: post.id,
      title: post.title,
      date: new Date(post.date).toLocaleDateString("pt-BR"),
      image: post.featuredImage?.node?.sourceUrl || "/img/blog-image.jpg",
      author: post.author?.node?.name || "Desconhecido",
      authorImage: post.author?.node?.avatar?.url || "/img/avatar1.png",
    })) || [];

  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    return [];
  }
}
