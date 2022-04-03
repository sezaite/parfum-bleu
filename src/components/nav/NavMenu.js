import { NavLink } from "react-router-dom";
import User from "../iconComponent/User";
import useToggleBodyFilter from "../hooks/useToggleBodyFilter";
import LoginModal from "../modals/LoginModal";
import { useState, useEffect } from "react";

const NavMenu = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        useToggleBodyFilter(document.querySelector("#loginModal"), isModalVisible);
        
    }, [isModalVisible]);

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
                <li>
                    <button className="login-toggler" onClick={()=>setIsModalVisible(!isModalVisible)}><User /></button>
                    
                </li>
            </ul>
        </nav> 
                
           
        
     );
}
 
export default NavMenu;