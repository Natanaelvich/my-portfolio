import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/content/extras";
import { siteConfig } from "@/content/profile";
import { Icon } from "@/app/components/svg-icon";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} - Blog | ${siteConfig.name}`,
    description: post.excerpt,
    alternates: { canonical: `${siteConfig.domain}/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="blog-page">
      <article className="container blog-article">
        <Link href="/blog" className="blog-back-link">
          <Icon name="fas fa-arrow-left" /> Voltar ao blog
        </Link>
        <header className="blog-article-header">
          <div className="blog-card-meta">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
          <h1>{post.title}</h1>
          <div className="tech-tags">
            {post.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </header>
        <div className="blog-article-content">
          {post.content.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
}
