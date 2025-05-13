
import styles from "./Layout.module.css"


const Layout = ({children}) => {
    return (
        <>
            <header className={styles.header}>
             <p>Library app</p>
            </header>
            {children}
            <footer className={styles.footer}>
                <p>Developed by me</p>
            </footer>
        </>
    );
}

export default Layout;
