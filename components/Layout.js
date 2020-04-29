import Header from "./Header";
import Head from 'next/head';

const Layout = ({ title, children }) => (
    <div>
        <Head>
            <title>{title}</title>
        </Head>
        <Header />
        {children}
    </div>
);

export default Layout;