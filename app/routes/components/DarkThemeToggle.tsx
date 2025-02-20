import styles from "./CustomHeader.module.css"
import { useEffect, useState } from "react";

const DarkThemeToggle = () => {
    const [isDarkTheme, setDarkTheme] = useState<boolean>(false);

    const sun = <img src="svg/sun.svg" alt="Light Theme" />
    const moon = <img src="svg/moon.svg" alt="Dark Theme" />

    useEffect(() => {
        let theme = localStorage.getItem("Theme");
        if (theme == "Dark") {
            setDarkTheme(true);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("Theme", isDarkTheme ? "Dark" : "Light")
        document.body.classList.toggle("dark-theme", isDarkTheme)
    }, [isDarkTheme])

    const toggleTheme = (): void => {
        setDarkTheme(!isDarkTheme);

    };

    return (
        <label className={styles.toggleLabel} onClick={toggleTheme}>
            {isDarkTheme ? sun : moon}
        </label>
    );
};

export default DarkThemeToggle