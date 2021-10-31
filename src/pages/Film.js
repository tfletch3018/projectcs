import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Film() {
    return (
        <div className="film">
            <Container fluid style={{ marginTop: 100 }}>
                <Row>
                    <Col size="md-12">
                        <h1 className="styled4 text-center">Acting Up...</h1>
                    </Col>
                </Row>
            </Container>

            <Container fluid style={{ marginTop: 20 }}>
                <Row>
                    <div className="music-card text-center" style={{ width: "25rem" }}>
                        <div className="music-card-body">
                            <h5 className="music-card-title">Resume</h5>
                            <div className="music-card-footer text-center">
                                <Link to="/film/resume">
                                    <button className="btn-view">Resume</button>
                                </Link>
                            </div>
                            <p className="music-card-text">Resume</p>
                        </div>
                    </div>

                    <div className="music-card text-center" style={{ width: "25rem" }}>
                        <div className="music-card-body">
                            <h5 className="music-card-title">Reel</h5>
                            <div className="music-card-footer text-center">
                                <Link to="/film/reel">
                                    <button className="btn-view">Reel</button>
                                </Link>
                            </div>
                            <p className="music-card-text">Reel</p>
                        </div>
                    </div>

                    <div className="music-card text-center" style={{ width: "25rem" }}>
                        <div className="music-card-body">
                            <h5 className="music-card-title">Clips</h5>
                            <div className="music-card-footer text-center">
                                <Link to="/film/clips">
                                    <button className="btn-view">Clips</button>
                                </Link>
                            </div>
                            <p className="music-card-text">Clips</p>
                        </div>
                    </div>
                </Row>

            </Container>
        </div>
    )
}

export default Film;