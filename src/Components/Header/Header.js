import React from 'react';
import './Header.css';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import Logo from '../../assets/logo.png';

const Header = () => {
    return (
        <div className="Navigation">
            <Navbar style={{
                backgroundColor: "#D70F64",
                height: "70px"
            }}>
                <NavbarBrand href="/" className="me-auto ms-md-5 Brand">
                    <img src={Logo} alt="Logo" width="80px" />
                </NavbarBrand>
                <Nav className="me-md-5">
                    <NavItem>
                        <NavLink href="#" className="NavLink">Links</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header;