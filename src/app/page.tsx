import Profile from '../component/profile/Profile';
import Blogs from '../component/blogs/Blogs';
import Contact from '../component/contact/Contact';

export default function Home() {
    return (
        <main>
            <Profile />
            <Blogs />
            <Contact />
        </main>
    );
}
