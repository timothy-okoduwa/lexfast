import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import l from './images/lexlogo.png'
import './NavBar.css'
const NavBar = () => {
    return (
        <div>
            <Navbar expand="lg" className=' pt-4 pb-4' style={{ background: '#F6FAFF' }}>
                <Container>
                    <Navbar.Brand href="#home">
                        <div>
                            <Link to='/' style={{ textDecoration: 'none' }}>
                                <img src={l} alt="lex" />
                            </Link>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="hello">
                            <Nav className="me-auto d-flex justify-content-end">
                                <NavDropdown title="Products" className="my-dropdown">
                                    <NavDropdown.Item>
                                        <div className='mb-3'>
                                            <div>
                                                <div className='lxf'> Lexfast Start </div>
                                            </div>
                                            <div className='lunch'>
                                                Launch, grow and manage your business
                                            </div>
                                        </div>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <div className='mb-3'>
                                            <div>
                                                <div className='lxf'> Lexfast Agent </div>
                                            </div>
                                            <div className='lunch'>
                                                All-in-one compliance for your company
                                            </div>
                                        </div>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <div className='mb-3'>
                                            <div>
                                                <div className='lxf'> Lexfast mailroom </div>
                                            </div>
                                            <div className='lunch'>
                                                Get a business address and mailbox
                                            </div>
                                        </div>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <div className='mb-3'>
                                            <div className='cassy'>
                                                <div className='lxf'> Pre -EIN Bank Account</div>
                                                <div className='cms'>Coming Soon!</div>
                                            </div>
                                            <div className='lunch'>
                                                Get a bank account faster without an EIN
                                            </div>
                                        </div>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <div className='mb-3'>
                                            <div>
                                                <div className='lxf'> Lexfast Payroll</div>
                                            </div>
                                            <div className='lunch'>
                                                Enable Hiring with payroll tax registration
                                            </div>
                                        </div>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <div className=''>
                                            <div className='cassy'>
                                                <div className='lxf'> Lexfast Insurance</div>
                                                <div className='cms'>Coming Soon!</div>
                                            </div>
                                            <div className='lunch'>
                                                Comprehensive protection for your company
                                            </div>
                                        </div>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Company" className="my-dropdown">

                                    <NavDropdown.Item>
                                        <div className='mb-3'>
                                            <div>
                                                <div className='lxf'> About us!</div>
                                            </div>
                                            <div className='lunch'>
                                                Learn what makes us different
                                            </div>
                                        </div>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <div >
                                            <div>
                                                <div className='lxf'>Careers</div>
                                            </div>
                                            <div className='lunch'>
                                                Join our team
                                            </div>
                                        </div>
                                    </NavDropdown.Item>

                                </NavDropdown>
                                <div className='mxp por'>Pricing</div>
                                <div className='mxp patt'>Partners</div>
                                <NavDropdown title="Learn" className="my-dropdown">
                                    <NavDropdown.Item>
                                        <div className='mb-3'>
                                            <div>
                                                <div className='lxf'> Blog </div>
                                            </div>
                                            <div className='lunch'>
                                                Fresh news, stories and customer success
                                            </div>
                                        </div>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <div className='mb-3'>
                                            <div>
                                                <div className='lxf'>Founder’s guide </div>
                                            </div>
                                            <div className='lunch'>
                                                Everything you would like to know & more
                                            </div>
                                        </div>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <div className='mb-3'>
                                            <div>
                                                <div className='lxf'> Help center </div>
                                            </div>
                                            <div className='lunch'>
                                                Helpful questions and answers
                                            </div>
                                        </div>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <div className='mb-3'>
                                            <div className='cassy'>
                                                <div className='lxf'> Free business name search</div>
                                                <div className='cms'>Coming Soon!</div>
                                            </div>
                                            <div className='lunch'>
                                                Get a bank account faster without an EIN
                                            </div>
                                        </div>
                                    </NavDropdown.Item>

                                    <NavDropdown.Item>
                                        <div className=''>
                                            <div className='cassy'>
                                                <div className='lxf'>C-Corporation</div>
                                                <div className='cms'>Coming Soon!</div>
                                            </div>
                                            <div className='lunch'>
                                                Find out which business is good for you
                                            </div>
                                        </div>
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <div className='put-in'>
                                    <button className='signn'>SIGN IN</button>
                                    <Link to='/start' style={{ textDecoration: 'none' }}>
                                        <button className='start'>Start your company</button>
                                    </Link>

                                </div>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar