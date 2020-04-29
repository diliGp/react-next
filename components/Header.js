import Link from 'next/link';

const Header = () => (
    <div>
        <ul>
            <li>
                <Link href="/"><a>Home</a></Link>
            </li>
            <li>
                <Link href="/about"><a>About</a></Link>
            </li>
        </ul>
        <style jsx>{`
            ul {
                display: flex;
                background-color: #333;
                color: #fff;
            } 
            ul li {
                list-style: none;
                margin-right: 20px;
            }
            ul li a {
                color: #fff;
                text-decoration: none;
            }
        `}</style>
    </div>
);

export default Header;