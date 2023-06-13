import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../Context/Context";

const Header = () => {
    const {theme,setTheme} = useContext(ThemeContext)

    const toggleDarkmode = () => {
        setTheme(!theme)
    }

    return ( 
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <a className="toggle" onClick={toggleDarkmode}>DARKMODE</a>
        </nav>
     );
}
 
export default Header;