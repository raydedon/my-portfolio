import Link from 'next/link';
import type { BlogPost } from './blogData';

type BlogCardProps = Pick<BlogPost, 'slug' | 'title' | 'date' | 'summary' | 'tags'>;

const BlogCard = ({ slug, title, date, summary, tags }: BlogCardProps) => {
    return (
        <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1">
            <div className="mb-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-800"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <p className="mb-2 text-sm text-gray-500">{date}</p>
            <h3 className="mb-3 text-2xl font-semibold text-gray-900">{title}</h3>
            <p className="mb-6 flex-1 text-base leading-7 text-gray-600">{summary}</p>
            <Link
                href={`/blogs/${slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-900"
            >
                Read article
                <span aria-hidden="true">→</span>
            </Link>
        </article>
    );
};

export default BlogCard;
