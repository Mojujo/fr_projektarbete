import styles from "./CustomHeader.module.css"
import { Link } from "react-router"

export function CustomHeader() {
    return (
        <header>
            <div className={styles.container}>
                <div className={styles.start}>
                    <button className={styles.iconButton}>
                        <img src="svg/guide.svg" alt="hamburger-menu" />
                    </button>
                    <div className={styles.headerLogo}>
                        <Link to={"//"}>
                            <div className={styles.logo}>
                                <img src="svg/academic.svg" alt="logo" className={styles.logoIcon} />
                                <h2>Projektarbete</h2>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}