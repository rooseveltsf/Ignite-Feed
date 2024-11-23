import styles from "./Header.module.css";
import Logo from '../../assets/Ignite simbol.svg';

export default function Header() {
    return (
        <header className={styles.header}>
            <img src={Logo} alt="Logo do Ignite Feed" />
        </header>
    )
}