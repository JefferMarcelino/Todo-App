import { ThemeContext, ToggleMode } from "../contexts/ThemeContext"
import { useContext } from "react"

const Header = () => {

    console.log(useContext(ThemeContext))
    ThemeContext.colors

    return (
        <header>
            <div>
                <h1>Todo List</h1>
                <ToggleMode></ToggleMode>
            </div>
            <p>What do you want to do?</p>
        </header>
    );
}
 
export default Header;