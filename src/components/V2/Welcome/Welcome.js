import React, { useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import HangingIdCard from '../../../Util/shared/HangId/HangId';
import './Welcome.css';
import { useNavigate } from 'react-router-dom';
import Type from '../../Home/Type';
import { Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from 'react-awesome-reveal';
function Welcome(props) {
    const {bio} = props;
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            handleClick();
        }, 11000);

        return () => clearTimeout(timer); // cleanup
    }, [navigate]);

    const handleClick = () => {
        navigate("/v2/home");
    };
    return ( 
      <Container fluid className="welcome-section"  onClick={handleClick} id='no-scroll'>
            <Container className="welcome-content d-flex">
                <HangingIdCard name={bio.full_name} role={bio.designation} />
                <div className='welcome-info'>
                     <Slide direction='up' cascade damping={1}>
                    <h1>Hey There! {" "}<span className="wave" role="img" aria-labelledby="wave">
                        👋🏻
                    </span> </h1>
                    <h1 className='welcome-title'>Welcome To My</h1>
                     </Slide>
                     <JackInTheBox delay={1500}>
                    <Type typeWriter={['Portfolio Website','Lets Start Debuging...']} />
                     </JackInTheBox>
                </div>
            </Container>
      </Container>
    );
}

export default Welcome;