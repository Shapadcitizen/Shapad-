import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const Footer = () => {
    return (
        <>
            <footer className=" d-none d-md-block">
                <Container fluid>
                    <Row className=" d-flex justify-content-around align-items-center">
                        <Col xs={11} sm={11} md={5} className='text-start' >
                            <div className='text-white'>
                                <span className='main-header' style={{ fontFamily: 'lato', fontWeight: '400', marginTop: '5rem', fontSize: '20px' }}>Headquaters:<br />35, Evangelist Nurudeen Street Abijo, Ibeju Lekki, Lagos</span>
                            </div>
                        </Col>

                        <Col xs={11} sm={11} md={5} className=''> {/* Show only on medium and larger screens */}
                            <div className='text-white d-flex justify-content-end'>
                                <a className='text-decoration-none text-white' href='https://www.linkedin.com/company/shapad/' target="_blank" rel="noopener noreferrer"> <i className="bi bi-linkedin fs-2" /></a>
                                <a className='text-decoration-none text-white' href='http://Instagram.com/theshapad' target="_blank" rel="noopener noreferrer"> <i className="bi bi-instagram fs-2" /></a>
                            </div>
                        </Col>
                    </Row>
                    <Row className=" mt-3 d-flex justify-content-around align-items-center">
                        <Col xs={11} sm={11} md={5} className='text-start' >
                            <div className=''>
                                <a className='main-header text-decoration-none text-white' style={{ fontFamily: 'lato', fontWeight: '400', marginTop: '5rem', fontSize: '20px' }} href="mailto:example@example.com?subject=Hello&body=I wanted to reach out to you about...">info@shapad.com.ng</a>
                            </div>
                        </Col>

                        <Col xs={11} sm={11} md={5} className=''> {/* Show only on medium and larger screens */}
                            <div className='text-white d-flex justify-content-end'>
                                <span style={{ fontFamily: 'lato', fontWeight: '400', fontSize: '20px' }}>+2348163781757</span>
                            </div>
                        </Col>

                    </Row>
                    <Col className='d-none d-md-block'>
                        <div className='text-center text-white pb-5 mt-4'>
                            <p style={{ fontFamily: 'lato', fontWeight: '500', fontSize: '16px' }}>©2025 SHAPAD.ALL RIGHTS RESERVED</p>
                        </div>
                    </Col>
                </Container>
            </footer>

            {/* Footer for small screen*/}

            <footer className='d-block d-md-none'>
                <Container fluid className=' justify-content-around'>
                    <Col xs={11} sm={11}>
                        <div className='text-white'>
                            <span className='main-header' style={{ fontFamily: 'lato', fontWeight: '400', marginTop: '5rem', fontSize: '18px' }}>Headquaters:<br /> 35, Evangelist Nurudeen Street Abijo, Ibeju Lekki, Lagos</span>
                        </div>
                    </Col>

                    <Col xs={12} sm={12} className='text-start my-4'> {/* Show only on medium and larger screens */}
                        <div className='text-white text-start'>
                            <a className='text-decoration-none text-white' href='https://www.linkedin.com/company/shapad/' target="_blank" rel="noopener noreferrer"> <i className="bi bi-linkedin fs-2 ms-auto" /></a>
                            <a className='text-decoration-none text-white' href='http://Instagram.com/theshapad' target="_blank" rel="noopener noreferrer"> <i className="bi bi-instagram fs-2" /></a>

                        </div>
                    </Col>

                    <Col xs={11} sm={11} className='text-start my-4' >
                        <div className='text-white'>

                            <a className='main-header text-decoration-none text-white' style={{ fontFamily: 'lato', fontWeight: '400', marginTop: '5rem', fontSize: '18px' }} href="mailto:example@example.com?subject=Hello&body=I wanted to reach out to you about...">info@shapad.com.ng</a>
                        </div>
                    </Col>

                    <Col xs={11} sm={11} className='my-4'> {/* Show only on medium and larger screens */}
                        <div className='text-white'>
                            <span style={{ fontFamily: 'lato', fontWeight: '400', fontSize: '18px' }}>+2348163781757</span>
                        </div>
                    </Col>

                    <Col className='py-4'>
                        <div className='text-center text-white pb-5 mt-4'>
                            <p style={{ fontFamily: 'lato', fontWeight: '500', fontSize: '14px' }}>©2025 SHAPAD.ALL RIGHTS RESERVED</p>
                        </div>
                    </Col>
                </Container>
            </footer>
        </>
    )
}
export default Footer;