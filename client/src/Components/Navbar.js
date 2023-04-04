import {NavLink} from 'react-router-dom'
import { Dropdown, Option } from "./Dropdown";


export const Navbar = () => {
    return(
        <nav className = "nav">
            <Dropdown>
                <Option selected value="ACM Hack Team 3" />
                <Option value="Volleyball Team" />
                <Option value="Tritones" />
                <Option value="Church" />
            </Dropdown>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='profile'>Profile</NavLink></li>
                <li><NavLink to='friends'>Friends</NavLink></li>
            </ul>
        </nav>
    );
}