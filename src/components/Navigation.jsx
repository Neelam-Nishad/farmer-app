import { Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <div className='row row1 shadow-sm'>
                <div className='col-10 mx-auto'>
                    <Navbar className='Navbar' expand="lg">
                        <NavLink exact to='./'><Navbar.Brand href="#home" className='links heading text-muted'>Broker-Down</Navbar.Brand></NavLink>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <NavLink exact to='./services'><Nav.Link className='links' href="#home">Service</Nav.Link></NavLink>
                                <NavLink exact to='./login'><Nav.Link className='links ml-4' href="#home">SignUp</Nav.Link></NavLink>
                                <NavLink exact to='./contact'><Nav.Link className='links ml-4' href="#link">Contact</Nav.Link></NavLink>
                                <NavLink exact to='./cart'><Nav.Link className='links ml-4' href="#link">🛒</Nav.Link></NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>

        </>
    );
}

export default Navigation;