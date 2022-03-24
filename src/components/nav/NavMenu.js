import { NavLink } from "react-router-dom";

const NavMenu = () => {
    return ( 
   
        <nav className='nav-menu'>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/all-perfumes">All perfumes</NavLink>
                </li>
                <li>
                    <NavLink to="#">Single perfume pge</NavLink>
                </li>
            </ul>
        </nav> 
                
           
        
     );
}
 
export default NavMenu;