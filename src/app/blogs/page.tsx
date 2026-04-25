import type { Metadata } from 'next';
import Blogs from '../../component/blogs/Blogs';

export const metadata: Metadata = {
    title: 'Blogs | Animesh Ray',
    description: 'Static architecture blogs by Animesh Ray on microfrontends and GraphQL federation.'
};

export default function BlogsPage() {
    return <Blogs />;
}
