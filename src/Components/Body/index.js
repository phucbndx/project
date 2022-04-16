import { Container, Row, Col } from 'react-bootstrap';
import { BsFillCameraReelsFill, } from "react-icons/bs";
import React, { Component, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Header from '../Header';
import Watch from '../Watch';
import carosel from './'
import './Body.css'

function Body() {
    const [films, setFilms] = useState([]);
    const [filmRap, setFilmRap] = useState([]);
    const [slider, setSlider] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/film')
            .then(res => res.json())
            .then(films => {
                setFilms(films)
                // console.log(films);

            });
        fetch(' http://localhost:3000/filmChieuRap')
            .then(res => res.json())
            .then(filmRap => {
                setFilmRap(filmRap)
                console.log('phim rap', filmRap);

            });
        fetch('http://localhost:3000/slider')
            .then(res => res.json())
            .then(slider => {
                setSlider(slider)
            })
    }, [])


    return (

        <Container fluid className="bg_black">
            <Header />
            <Container>
                <Row>
                    <Col className="px-0">
                        <div className="carosel mt-5 pt-5">
                            <div
                                id="carouselExampleControls"
                                className="codeinfo__carousel carousel slide"
                                data-bs-ride="carousel"
                            >
                                <div className="carousel-inner ">
                                    <Link to='Watch' className="carousel-item active">
                                        <img
                                            src='https://s198.imacdn.com/ff/2022/03/24/2330a261dbb9e31e_982ea2b9f71d32cc_2340971648110912516068.jpg'
                                            className="codeinfo__img d-block w-100 "
                                            alt="..."
                                        />
                                    </Link>
                                    {slider.map(
                                        (e) => {
                                            return (
                                                <Link to='Watch' className="carousel-item">
                                                    <img
                                                        src={e.image}
                                                        className="codeinfo__img d-block w-100 "
                                                        alt="..."
                                                    />
                                                </Link>
                                            )
                                        }
                                    )}
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExampleControls"
                                    data-bs-slide="prev"
                                >
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselExampleControls"
                                    data-bs-slide="next"
                                >
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>






                <Row className='mt-3 '>

                    <h1 className="text-uppercase text-danger text-center">phim chiếu rạp</h1>

                    {films.map((film) => {


                        return (
                            <Col sm={6} md={4} xl className="mt-4 pe-0 ">

                                <Link to='Watch' className="film mb-3 me-3 text-decoration " >

                                    <img src={film.image} className="w-100" alt="..." />
                                    <div className="film_tilte ">
                                        <h6 className="card-title ms-2  text-decoration-none">{film.title}</h6>
                                        <p className="card-text ms-2  text-decoration-none ">{film.description}</p>
                                    </div>
                                </Link>
                            </Col>
                        )
                    })}

                </Row>
                <Row>
                    {filmRap.map((e) => {


                        return (
                            <Col sm={3} md={4} xl className="mt-4 pe-0">

                                <Link to='Watch' className="film mb-3  text-decoration " >

                                    <img src={e.image} className="w-100" alt="..." />
                                    <div className="film_tilte ">
                                        <h6 className="card-title ms-2  text-decoration-none">{e.title}</h6>
                                        <p className="card-text ms-2  text-decoration-none ">{e.description}</p>
                                    </div>
                                </Link>
                            </Col>
                        )
                    })}


                </Row>
            </Container >

        </Container >

    )

}
export default Body;