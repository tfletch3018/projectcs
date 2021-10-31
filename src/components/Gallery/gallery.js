/* eslint-disable no-undef */
import "./gallery.css";
import React from "react";
import Container from "../Container";
import artist1 from "../../images/artist11.jpeg";
import artist2 from "../../images/artist12.jpeg";
import artist3 from "../../images/artist13.jpg";
import artist4 from "../../images/artist14.jpg";
import artist5 from "../../images/artist15.jpg";
import artist6 from "../../images/artist16.jpg";
import artist7 from "../../images/artist17.jpg";
import artist8 from "../../images/artist18.jpg";
import artist9 from "../../images/artist19.jpg";

function Gallery() {

    $(document).ready(function () {
        // Activate Carousel
        $("#myCarousel").carousel();

        // Enable Carousel Indicators
        $(".item1").click(function () {
            $("#myCarousel").carousel(0);
        });
        $(".item2").click(function () {
            $("#myCarousel").carousel(1);
        });
        $(".item3").click(function () {
            $("#myCarousel").carousel(2);
        });
        $(".item4").click(function () {
            $("#myCarousel").carousel(3);
        });

        // Enable Carousel Controls
        $(".left").click(function () {
            $("#myCarousel").carousel("prev");
        });
        $(".right").click(function () {
            $("#myCarousel").carousel("next");
        });
    });
    return (


        <Container>
            <div class="container">
                <div id="myCarousel" class="carousel slide">
                    {/* <!-- Indicators --> */}
                    <ol class="carousel-indicators">
                        <li className="item1 active"></li>
                        <li className="item2"></li>
                        <li className="item3"></li>
                        <li className="item4"></li>
                        <li className="item5"></li>
                        <li className="item6"></li>
                        <li className="item7"></li>
                        <li className="item8"></li>
                        <li className="item9"></li>
                    </ol>

                    {/* <!-- Wrapper for slides --> */}
                    <div className="carousel-inner" role="listbox">

                        <div className="item active">
                            <img className="artist" src={artist1} style={{ maxWidth: "100%", height: "auto" }} alt="Chaz" />
                            <div className="carousel-caption">
                                <h3>Chaz</h3>
                                <p>Chaz doing something dope&#128512;</p>
                            </div>
                        </div>

                        <div className="item">
                            <img className="artist" src={artist2} style={{ maxWidth: "100%", height: "auto" }} alt="Chaz" />
                            <div className="carousel-caption">
                                <h3>Chaz</h3>
                                <p>Chaz doing something dope&#128512;</p>
                            </div>
                        </div>

                        <div className="item">
                            <img className="artist" src={artist3} style={{ maxWidth: "100%", height: "auto" }} alt="Chaz" />
                            <div className="carousel-caption">
                                <h3>Chaz</h3>
                                <p>Chaz doing something dope&#128512;</p>
                            </div>
                        </div>

                        <div className="item">
                            <img className="artist" src={artist4} style={{ maxWidth: "100%", height: "auto" }} alt="Chaz" />
                            <div className="carousel-caption">
                                <h3>Chaz</h3>
                                <p>Chaz doing something dope&#128512;</p>
                            </div>
                        </div>

                        <div className="item">
                            <img className="artist" src={artist5} style={{ maxWidth: "100%", height: "auto" }} alt="Chaz" />
                            <div className="carousel-caption">
                                <h3>Chaz</h3>
                                <p>Chaz doing something dope&#128512;</p>
                            </div>
                        </div>

                        <div className="item">
                            <img className="artist" src={artist6} style={{ maxWidth: "100%", height: "auto" }} alt="Chaz" />
                            <div className="carousel-caption">
                                <h3>Chaz</h3>
                                <p>Chaz doing something dope&#128512;</p>
                            </div>
                        </div>

                        <div className="item">
                            <img className="artist" src={artist7} style={{ maxWidth: "100%", height: "auto" }} alt="Chaz" />
                            <div className="carousel-caption">
                                <h3>Chaz</h3>
                                <p>Chaz doing something dope&#128512;</p>
                            </div>
                        </div>

                        <div className="item">
                            <img className="artist" src={artist8} style={{ maxWidth: "100%", height: "auto" }} alt="Chaz" />
                            <div className="carousel-caption">
                                <h3>Chaz</h3>
                                <p>Chaz doing something dope&#128512;</p>
                            </div>
                        </div>

                        <div className="item">
                            <img className="artist" src={artist9} style={{ maxWidth: "100%", height: "auto" }} alt="Chaz" />
                            <div className="carousel-caption">
                                <h3>Chaz</h3>
                                <p>Chaz doing something dope&#128512;</p>
                            </div>
                        </div>

                    </div>

                    {/* <!-- Left and right controls --> */}
                    <a className="left carousel-control" href="#myCarousel" role="button">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" role="button">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </Container>
    )
}

export default Gallery;