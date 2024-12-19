import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/burger-logo.png';
import { useNavigate } from 'react-router';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { FilterRecipeAsync } from '../services/actions/SubmitAction';

function Header({ navs }) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <Navbar className="px-2 p-0 bg-primary" style={{ height: '62px' }}>
            <Container>
                <Navbar style={{ width: '100%' }}>
                    <Nav className="column-gap-2 align-items-center">
                        <Nav.Link className="text-white d-flex align-items-center d-none d-md-flex">
                            <img src={logo} alt="logo" style={{ width: '30px' }} />
                            <span className='ms-3 fw-bold fs-4'>FoodDesk</span>
                        </Nav.Link>
                    </Nav>
                    <Nav className="column-gap-2 align-items-center ms-auto">
                        <Form.Control type="search" placeholder="Search Recipe" className="me-2 py-2" aria-label="Search" onChange={(e) => dispatch(FilterRecipeAsync(e.target.value))}/>
                        <Button variant='light' className='fs-5' onClick={() => navigate('/favorite')}><i className="bi bi-star-fill"></i></Button>
                        {
                            navs.map((nav) => {
                                return (
                                    <Button key={nav.p} variant='light' className='fs-5' onClick={() => navigate(`${nav.p}`)}><i className={`bi bi-${nav.i}`}></i></Button>
                                )
                            })
                        }
                    </Nav>
                </Navbar>
            </Container>
        </Navbar>
    );
}

export default Header;