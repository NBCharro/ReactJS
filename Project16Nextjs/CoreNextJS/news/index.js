// dominio.com/news
import Link from 'next/link';

function NewsPage() {
    return (
        <>
            <h1>The News Page</h1>;
            <ul>
                <li>
                    <Link href="/news/detail">NextJs is a Great Framework</Link>
                </li>
                <li>More of NextJS</li>
            </ul>
        </>
    );
}

export default NewsPage;
