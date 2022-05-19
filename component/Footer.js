import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <h3><b><u><i>Feedly team</i></u></b></h3>
            <div >
                <p style={{ padding: '2px', fontFamily: 'cursive' }}>[Hitesh Gurnani] </p>
                <p style={{ padding: '2px', fontFamily: 'cursive' }}>[Arpit Vashitha] </p>
                <p style={{ padding: '2px', fontFamily: 'cursive' }}>[Arav Arora] </p>
            </div>

        </footer>
    )
}