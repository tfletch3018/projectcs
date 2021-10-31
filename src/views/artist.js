import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "../index.css";
// import CarouselComponent from "../components/Carousel/index";

function Artist() {
    return (
        <div className="music">
            <Container fluid style={{ marginTop: 150 }}>
                <Row>
                    <Col size="md-12">
                        <h1 className="text-center">Artist</h1>
                    </Col>
                </Row>
            </Container>

            {/* <Container>
                <CarouselComponent />
            </Container> */}

<Container fluid style={{ marginTop: 55 }}>

                <Row>
                    <div className="music-card text-center" style={{ width: "25rem" }}>
                        <div className="music-card-body">
                            <h5 className="music-card-title">Pictures</h5>
                            <div className="music-card-footer text-center">
                                <Link to="/music/artist/pictures">
                                    <button className="btn-view">Pictures</button>
                                </Link>
                            </div>
                            <p className="music-card-text">Pictures</p>
                        </div>
                    </div>

                    <div className="music-card text-center" style={{ width: "25rem" }}>
                        <div className="music-card-body">
                            <h5 className="music-card-title">Videos</h5>
                            <div className="music-card-footer text-center">
                                <Link to="/music/artist/videos">
                                    <button className="btn-view">Videos</button>
                                </Link>
                            </div>
                            <p className="music-card-text">Videos</p>
                        </div>
                    </div>


                </Row>

            </Container>



        </div>
    );
}

export default Artist;