import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Footer from './Footer'
import Header from './Header'
import { useRouter } from 'next/router'
import Hero from './Hero'
export default function Layout({ title, keywords, description, children }) {
    const route = useRouter();
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name="keywords" content={description} />
            </Head>
            <Header />
            {
                route.pathname === '/' && <Hero />
            }

            <div className="style container">
                {children}
            </div>
            <Footer></Footer>
        </div>
    )
}
Layout.defaultProps = {
    title: 'News you might be interested in',
    description: "A website that brings you latest news about sports"
}