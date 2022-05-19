import style from '../styles/Hero.module.css'

export default function Hero() {
    return (
        <div className={style.hero}>
            <h1> <marquee behavior="" direction="down">Find out the latest news</marquee> </h1>
        </div>
    )
}