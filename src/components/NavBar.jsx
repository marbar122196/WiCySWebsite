import {NavLink} from "react-router-dom"
import "./NavBar.css"
import logo from "../assets/wicys_logo.png"

export default function NavBar() {
    const link = ({ isActive }) =>
        "nav-link" + (isActive ? "active" : "")

    return (
        <nav className="navbar">
        
            <div className="logo-link">
                <NavLink to="/home" className={link}>
                    <img src={logo} altName="WiCyS Logo" className="logo"/>
                </NavLink>
            </div>

            <div className="nav-links">
                <NavLink to="/about" className={link}>About Us</NavLink>
                <NavLink to="/events" className={link}>Events</NavLink>
                <NavLink to="/board" className={link}>Our Board</NavLink>
                <NavLink to="/announcements" className={link}>Announcements</NavLink>
                <NavLink to="/join" className={link}>Join Us</NavLink>
            </div>
            
        </nav>
    )
}