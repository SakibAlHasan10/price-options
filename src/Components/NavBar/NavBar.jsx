import { useState } from "react";
import Link from "../link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/dashboard', name: 'Dashboard' },
      ];
    return (
        <div>
            <div onClick={()=>setOpen(!open)} className="md:hidden text-2xl">
                {
                open === true ? 
                <AiOutlineClose/> 
                : <AiOutlineMenu className=" "></AiOutlineMenu>
                }
            </div>
           <ul className="md:flex hidden md:visible">
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
           </ul>
        </div>
    );
};

export default NavBar;