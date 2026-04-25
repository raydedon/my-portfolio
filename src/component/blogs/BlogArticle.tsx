import Link from 'next/link';
import { BlogPost } from './blogData';
import MicrofrontendsArchitecture from './MicrofrontendsArchitecture';

type BlogArticleProps = {
    post: BlogPost;
};

const BlogArticle = ({ post }: BlogArticleProps) => {
    return (
        <main className="min-h-screen px-6 py-28">
            <article className="mx-auto flex max-w-3xl flex-col gap-10">
                <div className="flex flex-col gap-4">
                    <Link href="/blogs" className="text-sm font-medium text-green-700 hover:underline">
                        Back to blogs
                    </Link>
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-green-200 px-3 py-1 text-xs font-medium text-green-800"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="text-sm text-gray-500">{post.date}</p>
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                            {post.title}
                        </h1>
                        <p className="text-lg leading-8 text-gray-600">{post.hero}</p>
                    </div>
                    {post.previewUrl && (
                        <a
                            href={post.previewUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex w-fit items-center gap-2 rounded-full border border-green-200 bg-green-50 px-5 py-2.5 text-sm font-semibold text-green-700 transition hover:border-green-400 hover:bg-green-100"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="2" y1="12" x2="22" y2="12" />
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                            View live project
                        </a>
                    )}
                </div>

                {post.showDiagram && <MicrofrontendsArchitecture />}

                <div className="flex flex-col gap-8">
                    {post.sections.map((section) => (
                        <section key={section.heading} className="flex flex-col gap-4">
                            <h2 className="text-2xl font-semibold text-gray-900">
                                {section.heading}
                            </h2>
                            {section.paragraphs.map((paragraph) => (
                                <p key={paragraph} className="text-base leading-8 text-gray-700">
                                    {paragraph}
                                </p>
                            ))}
                        </section>
                    ))}
                </div>
            </article>
        </main>
    );
};

export default BlogArticle;
