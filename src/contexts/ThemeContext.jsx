import { createContext } from "react"

var colors = {
    isLightTheme: false,
    light: { syntax: "white", bg: "#31D2F6" },
    dark: { syntax: "white", bg: "#252323" },
}

export const ThemeContext = createContext(colors)

export const ToggleMode = () => {
    return (
        <span className="dark" onClick={e => {
            e.target.classList.toggle("dark")
            if(e.target.classList.contains("dark")) {
                colors.isLightTheme = false
            } else {
                colors.isLightTheme = true
            }
            console.log("Hiii", colors)
        }}></span>
    );
}
