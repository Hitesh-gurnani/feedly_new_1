import React from 'react'
import { API_URL } from '../../config/index'
import { Router, useRouter } from 'next/router'
import Layout from './../../component/Layout';
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/News.module.css'
export default function Singlenews({ news }) {

    const router = useRouter();
    console.log(router);
    return (
        <Layout>
            <div className={styles.news}>
                <span>{news.date}{news.time}</span>
            </div>
            <h1>{news.name}</h1>
            {news.image && (
                <div className={styles.image} style={{ alignItems: 'center' }}  >
                    <Image src={news.image} width={700} height={500}></Image>
                </div>
            )}
            <p>{news.detail}</p>
            <Link href="/news">
                <a className={styles.back}>Go back</a>
            </Link>
        </Layout>
    );
}

export async function getServerSideProps({ query: { slug } }) {
    const res = await fetch(`${API_URL}/api/news/${slug}`)
    const singlenews = await res.json();
    return {
        props: {
            news: singlenews[0],
        }
    }
}

// export async function getStaticProps({ params: { slug } }) {
//     const res = await fetch(`${API_URL}/api/news/${slug}`);
//     const singlenews = await res.json();
//     return {
//         props: {
//             news: singlenews[0],
//         },
//         revalidate: 1,
//     }
// }