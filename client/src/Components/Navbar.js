import {NavLink} from 'react-router-dom'

export const Navbar = () => {
    return(
        <nav className = "nav">
            <h2 className = "title"> ACM Project</h2>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='profile'>Profile</NavLink></li>
                <li><NavLink to='friends'>Friends</NavLink></li>
            </ul>
        </nav>
    );
}