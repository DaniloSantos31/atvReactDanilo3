import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <span>danilos.dev</span>
            <nav>
                <a href="">Home</a>
                <a href="">ODS</a>
                <a href="">Sobre</a>
            </nav>
        </header>
    )
}
export default Header