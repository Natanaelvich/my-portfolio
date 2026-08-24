import Link from "next/link";
import { Icon } from "@/app/components/svg-icon";
import { blogPosts } from "@/content/extras";

export function BlogPreviewSection() {
  return (
    <section id="blog-preview" className="blog-preview">
      <div className="container">
        <h2 className="section-title">Blog Técnico</h2>
        <div className="blog-preview-grid">
          {blogPosts.slice(0, 3).map((post) => (
            <article className="blog-preview-card" key={post.slug}>
              <h3>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="btn btn-secondary">
                Ler artigo
              </Link>
            </article>
          ))}
        </div>
        <div className="blog-preview-more">
          <Link href="/blog" className="btn btn-primary">
            <Icon name="fas fa-book" /> Ver todos os artigos
          </Link>
        </div>
      </div>
    </section>
  );
}
