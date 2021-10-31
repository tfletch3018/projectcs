import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// import Container from '../Container';
import "./style.css"
// import artist1 from "../../images/artist1.jpeg";
// import artist2 from "../../images/artist2.jpeg";
// import artist3 from "../../images/artist3.jpg";
import artist4 from "../../images/artist4.jpg";
// import artist5 from "../../images/artist5.jpg";
// import artist6 from "../../images/artist6.jpg";
import artist7 from "../../images/artist7.jpg";
// import artist8 from "../../images/artist8.jpg";
import artist9 from "../../images/artist9.jpg";
// import testartist2 from "../../images/testartist2.jpeg";
// import testartist1 from "../../images/testartist1.jpeg";
import testartist1 from "../../images/testartist1.jpeg";
import testartist2 from "../../images/testartist2.jpeg";
import testartist3 from "../../images/testartist3.jpg";
import testartist5 from "../../images/testartist5.jpg";
import testartist6 from "../../images/testartist6.jpg";
import testartist8 from "../../images/testartist8.jpg";


function CarouselComponent() {
    return (

        // <Container>
            <div className="carousel-wrapper">
                <Carousel className="style" infiniteLoop useKeyboardArrows autoPlay>

                    <div className="slides">
                        {/* <img src={artist1} id="" alt="" /> */}
                           <img src={testartist1} id="" alt="" />
                        <div className="carousel-caption">
                            <h3>Chaz</h3>
                            <p>Chaz doing something dope&#128512;</p>
                        </div>
                    </div>

                    <div className="slides">
                        {/* <img src={artist2} id="" alt="" /> */}
                        <img src={testartist2} id="" alt="" />
                        <div className="carousel-caption">
                            <h3>Chaz</h3>
                            <p>Chaz doing something dope&#128512;</p>
                        </div>
                    </div>

                    <div className="slides" id="">
                        {/* <img src={artist3} id="" alt="" /> */}
                        <img src={testartist3} id="" alt="" />
                        <div className="carousel-caption">
                            <h3>Chaz</h3>
                            <p>Chaz doing something dope&#128512;</p>
                        </div>
                    </div>

                    <div className="slides">
                        <img src={artist4} alt="" />
                        <div className="carousel-caption">
                            <h3>Chaz</h3>
                            <p>Chaz doing something dope&#128512;</p>
                        </div>
                    </div>

                    <div className="slides">
                        {/* <img src={artist5} id="" alt="" /> */}
                        <img src={testartist5} id="" alt="" />

                        <div className="carousel-caption">
                            <h3>Chaz</h3>
                            <p>Chaz doing something dope&#128512;</p>
                        </div>
                    </div>

                    <div className="slides">
                        {/* <img src={artist6} id="" alt="" /> */}
                        <img src={testartist6} id="" alt="" />
                        <div className="carousel-caption">
                            <h3>Chaz</h3>
                            <p>Chaz doing something dope&#128512;</p>
                        </div>
                    </div>

                    <div className="slides">
                        <img src={artist7} id="" alt="" />
                        <div className="carousel-caption">
                            <h3>Chaz</h3>
                            <p>Chaz doing something dope&#128512;</p>
                        </div>
                    </div>

                    <div className="slides">
                        {/* <img src={artist8} id="" alt="" /> */}
                        <img src={testartist8} id="" alt="" />
                        <div className="carousel-caption">
                            <h3>Chaz</h3>
                            <p>Chaz doing something dope&#128512;</p>
                        </div>
                    </div>

                    <div className="slides">
                        <img src={artist9} id="" alt="" />
                        <div className="carousel-caption">
                            <h3>Chaz</h3>
                            <p>Chaz doing something dope&#128512;</p>
                        </div>
                    </div>
                </Carousel>
            </div>
        // </Container>
    );
}

export default CarouselComponent