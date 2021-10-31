import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import CarouselComponent from "../components/Carousel/index";
import "../index.css";

function artistPics() {
    return (
        <div className="music">
            <Container fluid style={{ marginTop: 50 }}>

                <Row>
                    <Col size="md-12">
                        <h1 className="text-center">Pics</h1>
                    </Col>
                </Row>
                <Row>
                    <div className="text-center">
                        <Link to="/music/artist">
                            <button className="btn-view">Go Back</button>
                        </Link>
                    </div>
                </Row>
            </Container>

            <Container>
                <CarouselComponent />
            </Container>
        </div>
    );
}

export default artistPics;