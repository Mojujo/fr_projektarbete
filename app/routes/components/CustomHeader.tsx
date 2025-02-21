import styles from "./CustomHeader.module.css"
import { Link } from "react-router"
import Hamburger from "./Hamburger"
import DarkThemeToggle from "./DarkThemeToggle"

export function CustomHeader() {
    return (
        <header>
            <div className={styles.container}>
                <div className={styles.start}>
                    <button className={styles.iconButton}>
                        <Hamburger fillColor="var(--color)" />
                    </button>
                    <div className={styles.headerLogo}>
                        <Link to={"/"}>
                            <div className={styles.logo}>
                                <img src="pictures/logo.png" alt="logo" className={styles.logoIcon} />
                                <h2>Homepage</h2>
                            </div>
                        </Link>
                    </div>
                    <div className={styles.navBar}>
                        <Link to={"/about"}>
                            <div className={styles.logo}>
                                <img src="pictures/chillguy.png" alt="just a chill guy" className={styles.logoIcon} />
                                <h2>About me</h2>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className={styles.toggle}>
                    <DarkThemeToggle />
                </div>
            </div>
        </header>
    )
}