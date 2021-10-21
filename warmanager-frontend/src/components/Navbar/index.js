import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
} from "./NavbarElements";

const Navbar = () => {
    function signedOut() {
        sessionStorage.clear();
        //REFRESH THE PAGE OR SOMETHING 
    }
    return (
        <>
            <Nav>
                <NavLogo to="/">
                    Logo
                </NavLogo>
                <Bars />
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact
                    </NavLink>
                    <NavLink to="/signout" onClick={signedOut} activeStyle>
                        Sign Out
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
export default Navbar;