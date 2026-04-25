import { blogPosts } from './blogData';
import BlogCard from './BlogCard';

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
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
