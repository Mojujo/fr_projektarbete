import { useEffect, useState } from "react";
import Cog from "./Cog"

const DarkThemeToggle = () => {
    const [isDarkTheme, setDarkTheme] = useState<boolean>(false);

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

    const toggleTheme = () => {
        setDarkTheme(!isDarkTheme);
    };

    return (
        <label>
            <input type="checkbox" readOnly checked={isDarkTheme} onClick={toggleTheme} />
            <span>Dark Mode</span>
            <Cog fillColor="var(--color)" />
        </label>
    );
};

export default DarkThemeToggle