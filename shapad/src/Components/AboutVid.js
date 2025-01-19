import React, { useRef } from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Video from '../assets/nolly.mp4'
import './Vid.css'
import { useNavigate } from 'react-router-dom';

const AboutVid = () => {
    const videoRef = useRef(null);

    const handleVideoEnd = () => {
        if (videoRef.current) {
            videoRef.current.play(); // Replay the video
        }
    };

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/nolly-cine-tv');
    }

    return (
        <Container lg className=" d-flex justify-content-start align-items-start">
            <Col xs={11} sm={11} md={7} className='text-start mb-5' >
                <h2 className="text-white my-4" style={{ fontFamily: 'lato', fontWeight: '700' }}>Explore our work</h2>
                <div className="vid-container">
                    <video ref={videoRef} autoPlay muted loop playsInline onEnded={handleVideoEnd} className='rounded' style={{ width: '100%', height: 'auto' }}>
                        <source src={Video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="overlay">
                        <h2 className="text-start overlay-t ">Nolly Cine Tv</h2>
                        <button className="btn3" onClick={handleClick}>Read case study</button>
                    </div>
                </div>

            </Col>


        </Container>
    )
}
export default AboutVid;