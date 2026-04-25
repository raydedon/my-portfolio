import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogArticle from '../../../component/blogs/BlogArticle';
import { blogPostMap, blogPosts } from '../../../component/blogs/blogData';

type BlogPostPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug
    }));
}

export async function generateMetadata({
    params
}: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPostMap[slug];

    if (!post) {
        return {};
    }

    return {
        title: `${post.title} | Animesh Ray`,
        description: post.summary
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = blogPostMap[slug];

    if (!post) {
        notFound();
    }

    return <BlogArticle post={post} />;
}
