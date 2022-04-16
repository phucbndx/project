import React from 'react';
import { useEffect, useState } from 'react';
import Header from '../Header';
import { Container, Row, Col } from 'react-bootstrap';
import { Player } from 'video-react';

const Watch = () => {
    const [video, setVideo] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/videos')
            .then(res => res.json())
            .then(video => {

                setVideo(video)
                // console.log(video);
            });

    }, [])
    return (

        <Container fluid>
            <Header />
            <Container>
                <Row className='mt-5 pt-5'>
                    <Col xl={8}>
                        <Player

                            playsInline
                            poster="/assets/poster.png"
                            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                        />
                    </Col>
                    <Col xl={4}>asas</Col>
                </Row>
                
            </Container>
        </Container>
        // <div>
        //     <h1 className="text-black">day la watch</h1>
        //     <img src="1.jpg" className="" alt="..." />
        // </div>
    );
};

export default Watch;