import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import blogs from '@/constants/blogs.json';

type BlogPost = (typeof blogs)[number];

function getPost(slug: string): BlogPost | undefined {
  return blogs.find((post) => post.slug === slug);
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post) {
    return {
      title: 'Blog post not found',
    };
  }

  return {
    title: post.title,
    description: post.summary,
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);

  if (!post) {
    notFound();
  }

  const publishedDate = formatDate(post.date);
  const paragraphs = post.content.split('\n\n');

  return (
    <section className="section" aria-labelledby="blog-post-heading">
      <div className="container blog-post-container">
        <p className="blog-breadcrumb">
          <Link href="/blog">Blog</Link> / <span>{post.title}</span>
        </p>
        <h1 id="blog-post-heading" className="blog-post-title">
          {post.title}
        </h1>
        <p className="blog-post-date">{publishedDate}</p>

        <div className="blog-post-body">
          {paragraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

