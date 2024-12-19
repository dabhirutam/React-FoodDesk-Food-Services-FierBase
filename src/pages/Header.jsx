import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/burger-logo.png';
import { useNavigate } from 'react-router';
import { Button } from 'react-bootstrap';

function Header() {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/add');
    }

    return (
        <Navbar className="px-2 p-0 bg-warning" style={{ height: '62px' }}>
            <Container>
                <Navbar style={{ width: '100%' }}>
                    <Nav className="column-gap-2 align-items-center">
                        <Nav.Link href="#logo" className="text-white d-flex align-items-center d-none d-md-flex">
                            <img src={logo} alt="logo" style={{ width: '30px' }} />
                            <span className='ms-3 fw-bold fs-4'>FoodDesk</span>
                        </Nav.Link>
                    </Nav>
                    <Nav className="column-gap-2 align-items-center ms-auto">
                        <Button href="#" className="text-white" onClick={handleNavigate}>Add Recipe</Button>
                    </Nav>
                </Navbar>
            </Container>
        </Navbar>
    );
}

export default Header;