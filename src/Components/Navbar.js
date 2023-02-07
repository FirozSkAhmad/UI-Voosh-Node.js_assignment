import { NavLink } from 'react-router-dom'
function NavBar() {
    return (
        <div className="NavStyle">
            <ul>
                <li><NavLink to="/" className="NavBar-Link">Home</NavLink></li>{" "}
                <li><NavLink to="/login" className="NavBar-Link">Login</NavLink></li>
            </ul>
        </div>
    );
}

export default NavBar;