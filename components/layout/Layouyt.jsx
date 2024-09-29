import Link from "next/link";
import styles from "./Layout.module.css";
const Layouyt = ({ children }) => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.left}>
                    <Link href="/">DeliciousFood</Link>
                </div>
                <div className={styles.right}>
                    <Link href="/menu">Menu</Link>
                    <Link href="/categories">Categories</Link>
                </div>
            </header>
            <div className={styles.container}>{children}</div>
            <footer className={styles.footer}>
                <a
                    href="https://www.lovefood.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    loveFood
                </a>{" "}
                Food Project &copy;
            </footer>
        </>
    );
};

export default Layouyt;
