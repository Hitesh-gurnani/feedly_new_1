import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../component/Layout'
import { API_URL } from '../../config/index'
import NewsItem from '../../component/NewsItem'
import style from '../../styles/News.module.css'
export default function News({ news }) {
    // {
    //   console.log()
    // }
    return (
        <div >
            <Layout>
                <h1>News</h1>
                {
                    news.length === 0 && <h3>No news</h3>
                }
                {
                    news.map((item) => (
                        <NewsItem key={item.id} news={item} />
                    ))
                }
                {/* {news.length > 0 && (
                    <Link href='/news'>
                        <a className='btn-secondary'>View All news</a>
                    </Link>
                )} */}
                <Link href='/'>
                    <a className={style.back}>Go back</a>
                </Link>
                {/* <Link href="/about">
          <a>About</a>
        </Link> */}
            </Layout>
        </div>
    )
}

// export async function getServerSideProps() {
//     const res = await fetch(`${API_URL}/api/news/data`)
//     // console.log(res);
//     const news = await res.json();
//     return {
//         props: { news },
//     }
// }
export async function getStaticProps() {
    const res = await fetch(`${API_URL}/api/news/data`)
    // console.log(res);
    const news = await res.json();
    return {
        props: { news },
    }
}