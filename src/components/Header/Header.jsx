import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import HeaderLink from "../HeaderLink/HeaderLink";

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo Alura" style={{ width: "150px" }} /> {/* Ajusta el tamaño del logo aquí */}
                </section>
            </Link>
            <nav className={styles.nav}>
                <div className={styles.navLinks}>
                    <HeaderLink url="./">Home</HeaderLink>
                    <HeaderLink url="./newVideo">Nuevo Video</HeaderLink>
                </div>
            </nav>
        </header>
    );
}

export default Header;
