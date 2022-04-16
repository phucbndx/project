import { Container, Row, Col, Nav, NavDropdown, Dropdown, Navbar, Offcanvas, Form, FormControl, Button } from 'react-bootstrap';
import { BsSearch, BsPersonFill, BsFacebook } from "react-icons/bs";
function Header() {
    return (
        <Container fluid className='bgAll border-bottom fixed-top'>
            <Container>
                <Row>
                    <Col XL={10}>
                        <div>
                            <Navbar bg="" expand="lg">
                                <Container fluid className='px-0'>
                                    <Navbar.Brand href="" className='me-0'><img className='logo' src="https://fim1080.com/assets/img/phim1080.png" /></Navbar.Brand>
                                    <Navbar id="responsive-navbar-nav" className='d-none d-lg-block '>
                                        <Nav className="me-auto">
                                            <div className="dropdown">
                                                <button className="btn text-light" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Thể Loại
                                                </button>
                                                <ul className="dropdown-menu py-0" aria-labelledby="dropdownMenuButton1">
                                                    <li><a className="dropdown-item text-light" href="#">Action</a></li>
                                                    <li><a className="dropdown-item text-light" href="#">Another action</a></li>
                                                    <li><a className="dropdown-item text-light" href="#">Something else here</a></li>
                                                </ul>
                                            </div>
                                            <div className="dropdown">
                                                <button className="btn text-light" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Quốc Gia
                                                </button>
                                                <ul className="dropdown-menu py-0" aria-labelledby="dropdownMenuButton1">
                                                    <li><a className="dropdown-item text-light" href="#">Action</a></li>
                                                    <li><a className="dropdown-item text-light" href="#">Another action</a></li>
                                                    <li><a className="dropdown-item text-light" href="#">Something else here</a></li>
                                                </ul>
                                            </div>
                                            <div className="dropdown">
                                                <button className="btn text-light" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Phim Lẻ
                                                </button>
                                                <ul className="dropdown-menu py-0" aria-labelledby="dropdownMenuButton1">
                                                    <li><a className="dropdown-item text-light" href="#">Action</a></li>
                                                    <li><a className="dropdown-item text-light" href="#">Another action</a></li>
                                                    <li><a className="dropdown-item text-light" href="#">Something else here</a></li>
                                                </ul>
                                            </div>
                                            <div className="dropdown">
                                                <button className="btn text-light" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Phim Bộ
                                                </button>
                                                <ul className="dropdown-menu py-0" aria-labelledby="dropdownMenuButton1">
                                                    <li><a className="dropdown-item text-light" href="#">Action</a></li>
                                                    <li><a className="dropdown-item text-light" href="#">Another action</a></li>
                                                    <li><a className="dropdown-item text-light" href="#">Something else here</a></li>
                                                </ul>
                                            </div>

                                            <div className="dropdown">
                                                <button className="btn text-light" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Chiếu Rạp
                                                </button>
                                            </div>
                                            <div className="dropdown">
                                                <button className="btn text-light" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Sắp Chiếu
                                                </button>
                                            </div>

                                            <div className="search ms-2 rounded-pill border border-secondary bg-dark d-flex align-items-center  d-none d-lg-block">
                                                <input type="search" placeholder='Tìm Kiếm' className=' bg-dark text-light border-0 ms-3  rounded-pill' />
                                                <BsSearch className='text-light cuson fw-blod mb-1' />
                                            </div>
                                        </Nav>

                                    </Navbar>

                                    <Navbar.Toggle aria-controls="offcanvasNavbar " className="bg-body" />

                                    <Navbar.Offcanvas
                                        id="offcanvasNavbar"
                                        aria-labelledby="offcanvasNavbarLabel"
                                        placement="end"
                                        className="px-0"
                                    >
                                        <Offcanvas.Header closeButton>
                                            <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>

                                        </Offcanvas.Header>
                                        <Offcanvas.Body>
                                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                                <Nav.Link href="#action1">Home</Nav.Link>
                                                <Nav.Link href="#action2">Link</Nav.Link>
                                                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <NavDropdown.Item href="#action5">
                                                        Something else here
                                                    </NavDropdown.Item>
                                                </NavDropdown>
                                            </Nav>
                                            <Form className="d-flex">
                                                <FormControl
                                                    type="search"
                                                    placeholder="Search"
                                                    className="me-2"
                                                    aria-label="Search"
                                                />
                                                <Button variant="outline-success">Search</Button>
                                            </Form>
                                        </Offcanvas.Body>
                                    </Navbar.Offcanvas>
                                </Container>
                            </Navbar>
                        </div>
                    </Col>

                    <Col xl={2} className="d-flex align-items-center justify-content-around">
                        <div className="d-flex align-items-center justify-content-evenly">
                            <div className='me-4'><img src='https://cdn-icons-png.flaticon.com/512/5968/5968764.png' className='fb d-none d-xl-block' /></div>
                            {/* <div><BsFacebook className='text-light fs-1  bg-primary rounded-circle' /></div> */}
                            <div><BsPersonFill className='text-light fs-1  rounded-circle border border-light p-2 d-none d-xl-block' /></div>
                        </div>

                    </Col>
                </Row>

            </Container>
        </Container>



    );
}

export default Header;
