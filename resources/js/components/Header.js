import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { Link } from "react-router-dom";

  class Header extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
  
    return (
        <div className="header">
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="/index" className='nav-link'>IndexApp</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/services" className='nav-link'>Services</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );  
}
}
 export default Header;
