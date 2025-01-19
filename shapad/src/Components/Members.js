import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';



const Members = () => {
    const teamMembers = [
        {
            src: require('../assets/Abdulazeez Orehware 1 (2).png'),
            name: 'Abdulazeez Orehware',
            role: 'CEO/Founder Shapad Comm',
            instagram: 'https://www.instagram.com/zeegrafix',
            linkedin: 'https://www.linkedin.com/in/abdulazeez-haruna'
        },

        {
            src: require('../assets/Rihanna Haruna.png'),
            name: 'Rihanat Haruna',
            role: 'Co-founder/Project Manager',
            instagram: '',
            linkedin: 'https://www.linkedin.com/in/rihanat-haruna-568987265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        },

        {
            src: require('../assets/Olajide Promise 1 (2).png'),
            name: 'Olajide Promise',
            role: 'Partner, Growth',
            instagram: 'https://www.instagram.com/pro_meezz',
            linkedin: 'https://www.linkedin.com/in/olajide-promise'
        },

        {
            src: require('../assets/Mom Chai.png'),
            name: 'Môm Chia',
            role: 'Partner, Digital Marketer',
            instagram: 'https://www.instagram.com/ibn_iornum?igsh=bGt1MmF0N2Q0czB2&utm_source=qr',
            linkedin: 'https://www.linkedin.com/in/chiamomm?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
        },

        {
            src: require('../assets/Tomiwa Daniel.png'),
            name: 'Tomiwa Daniel',
            role: 'Partner, 3d Motion Designer',
            instagram: 'https://www.instagram.com/_tomiwadaniel?igsh=cW8waTV6bmtoaDF5&utm_source=qr',
            linkedin: 'https://www.linkedin.com/in/tomiwa-daniel-28657a19a'
        },

        {
            src: require('../assets/Vivian Ekemezie.png'),
            name: 'Vivian Ekemezie',
            role: 'Partner, Growth & Sales',
            instagram: 'https://www.instagram.com/vivian_ekemezie?igsh=MWtuZzJsczU4ODN2Mg==',
            linkedin: 'https://www.linkedin.com/in/vivian-ekemezie?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        },

        {
            src: require('../assets/Mowete Emmanuel.png'),
            name: 'Mowete Emmanuel',
            role: 'Partner, Motion Designer',
            instagram: 'https://www.instagram.com/_slimdesigns?igsh=MWJ2bWlvd3IzZHJqcA==',
            linkedin: 'https://www.linkedin.com/in/isiomamowete?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        },

        {
            src: require('../assets/Odunmbaku Paul 1.png'),
            name: 'Odunmbaku Paul',
            role: ' Partner, Brand designer',
            instagram: 'https://www.instagram.com/tayo.pa',
            linkedin: 'https://www.linkedin.com/in/odunmbaku-oluwatayo-97979b184?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
        }


    ]
    return (
        <Container>

            <Row className='justify-content-start align-items-start mt-5 mb-5 g-4'>

                {teamMembers.map((member, index) => (
                    <Col key={index} xs={12} sm={6} md={3} className='text-start'>
                        <div className='py-4'>
                            <img src={member.src} alt={member.name} className="img-fluid" />
                            <h5 className='fs-4 mt-3 text-white'>{member.name}</h5>
                            <h5 className='fs-5 text-white '>{member.role}</h5>
                            <div className="d-flex justify-content-start">

                                <a className='text-decoration-none text-white' href={member.instagram} target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-instagram ms-auto fs-2"></i>
                                </a>
                                <a className='text-decoration-none text-white' href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-linkedin fs-2"></i>
                                </a>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
export default Members;