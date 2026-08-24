import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/content/extras";
import { siteConfig } from "@/content/profile";
import { Icon } from "@/app/components/svg-icon";

export const metadata: Metadata = {
  title: `Blog - ${siteConfig.name}`,
  description:
    "Artigos sobre React Native, AI Agents, liderança técnica e desenvolvimento fullstack.",
  alternates: { canonical: `${siteConfig.domain}/blog` },
};

export default function BlogPage() {
  return (
    <div className="blog-page">
      <div className="container blog-container">
        <header className="blog-header">
          <Link href="/" className="blog-back-link">
            <Icon name="fas fa-arrow-left" /> Voltar ao portfólio
          </Link>
          <h1>Blog Técnico</h1>
          <p>
            Reflexões sobre mobile, AI Agents e liderança técnica em produtos
            reais.
          </p>
        </header>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article className="blog-card" key={post.slug}>
              <div className="blog-card-meta">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <h2>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p>{post.excerpt}</p>
              <div className="tech-tags">
                {post.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <Link href={`/blog/${post.slug}`} className="btn btn-primary">
                Ler artigo
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
