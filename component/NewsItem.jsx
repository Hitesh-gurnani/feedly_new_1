import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import style from '../styles/NewsItem.module.css'

export default function NewsItem({ news }) {
    // {
    //   console.log()
    // }


    return (
        <div className={style.news}>
            <div className={style.img}>
                <Image src={news.image ? news.image : 'NO IMAGE'} width={150} height={150} />
            </div>
            <div className={style.info}>
                <span>
                    {news.data} {news.time}
                </span>
                <h3><i>{news.name}</i></h3>
            </div>
            <div className={style.link}>
                <Link href={`news/${news.slug}`}>
                    <a className="btn">
                        Read More
                    </a>
                </Link>
            </div>

        </div>
    )
}

