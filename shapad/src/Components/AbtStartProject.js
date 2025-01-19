import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
const AbtStartProject = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/start-a-project');
    }
    return (
        <Container lg className=" d-flex justify-content-start align-items-start">

            <Col xs={11} sm={11} md={11} className='text-start mb-5' >
                <div className='text-white'>
                    <h2 className='main-header3'>Ready to work with us?</h2>
                </div>
                <button className='btn1 my-4' onClick={handleClick}>Start a project
                    <i className="bi bi-arrow-right-short"></i>
                </button>
            </Col>
        </Container>
    )
}
export default AbtStartProject;