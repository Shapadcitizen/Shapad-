import React from 'react'
import { useRef } from 'react';
import Video from '../assets/nolly.mp4'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './Video.css';
import { useNavigate } from 'react-router-dom';
const Vid = () => {
    const navigate = useNavigate();

    const handleChange = () => {
        navigate('/nolly-cine-tv')
    }
    const videoRef = useRef(null);

    const handleVideoEnd = () => {
        if (videoRef.current) {
            videoRef.current.play(); // Replay the video
        }
    };
    return (
        <Container fluid className='d-flex justify-content-center align-items-center'>
            <Col xs={11} sm={11} md={11} className='text-center' style={{ marginTop: '3rem' }}>

                <div className="vid-container1">
                    <video ref={videoRef} autoPlay muted loop playsInline onClick={handleChange} onEnded={handleVideoEnd} className='vidd' style={{ width: '100%', height: '100%', }}>
                        <source src={Video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="overlay1 text-start">
                        <h2 className="text-start fw-bold overlay-text mb-0 mb-sm-3 ">Nolly Cine Tv</h2>
                        <span className='overlay-text1'>L'expérience Africaine</span>

                    </div>
                </div>
            </Col>
        </Container>
    )
}
export default Vid;