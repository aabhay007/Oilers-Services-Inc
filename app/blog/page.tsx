import Link from 'next/link';
import blogs from '@/constants/blogs.json';

type BlogPost = (typeof blogs)[number];

export default function BlogIndexPage() {
  const sortedPosts: BlogPost[] = [...blogs];

  return (
    <section className="section section-alt" aria-labelledby="blog-heading">
      <div className="container">
        <h1 id="blog-heading" className="section-title">
          Blog &amp; Insights
        </h1>
        <p
          style={{
            maxWidth: '640px',
            margin: '0 auto 2rem',
            textAlign: 'center',
          }}
        >
          Learn more about renovations, construction, landscaping, and property
          maintenance from Oilers Services Inc.
        </p>

        {sortedPosts.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#777' }}>
            No blogs yet. New insights will be published here soon.
          </p>
        ) : (
          <div className="blog-grid">
            {sortedPosts.map((post) => (
              <article key={post.slug} className="blog-card">
                <h2 className="blog-title">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="blog-summary">{post.summary}</p>
                <Link href={`/blog/${post.slug}`} className="blog-read-more">
                  Read more
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

