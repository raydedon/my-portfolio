import Link from 'next/link';
import { blogPosts } from './blogData';

const Blogs = () => {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="flex flex-col gap-3 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-700">
            Writing
          </p>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Two architecture stories from my work
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="mb-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mb-2 text-sm text-gray-500">{post.date}</p>
              <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                {post.title}
              </h3>
              <p className="mb-6 flex-1 text-base leading-7 text-gray-600">
                {post.summary}
              </p>
              <Link
                href={`/blogs/${post.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-900"
              >
                Read article
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
