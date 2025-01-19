import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Why.css';
const Why = () => {
    const Services = [
        {
            main: 'Branding',
            sub1: 'Brand Strategy',
            sub2: 'Logo & Visual Identity Design',
            sub3: 'Brand Guidelines'
        },

        {
            main: 'Digital Marketing',
            sub1: 'Search Engine Optimization (SEO)',
            sub2: 'Social Media Marketing',
            sub3: 'Email Marketing'
        },

        {
            main: 'Content Creation',
            sub1: 'Copywriting',
            sub2: 'Graphic Design',
            sub3: 'Video Production',
            sub4: 'Photography'
        },

        {
            main: 'Media Strategy',
            sub1: 'Strategy Development',
            sub2: 'Channel Selection',
            sub3: 'Negotiation & Buying',
            sub4: 'Campaign Management'
        },

    ]
    return (
        <Container lg className='d-flex justify-content-start align-items-start'>
            <Row className="text-start justify-content-start  mb-5" style={{ marginTop: '3rem' }}>
                <h1 className=" main1 mb-4 mb-md-5" >Our expertise</h1>
                {Services.map((service, index) => (
                    <Col key={index} xs={12} sm={6} md={3} className=' text-white mb-4'> {/* Added margin-bottom for spacing */}
                        <div>
                            <strong className="servicesmain mb-4" style={{ fontFamily: 'lato', fontWeight: '700' }}>{service.main}</strong>
                            <ul className="list-unstyled text-start mt-4">
                                {Object.keys(service).filter(key => key.startsWith('sub')).map((subKey, subIndex) => (
                                    <li className="servicessub" style={{ fontFamily: 'Lato', fontWeight: '700' }} key={subIndex}>{service[subKey]}</li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                ))}
                <Col>

                </Col>

            </Row>

        </Container>
    )
}
export default Why;