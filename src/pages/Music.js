import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Music() {
    return (
        <div className="music">
            <Container fluid style={{ marginTop: 150 }}>
                <Row>
                    <Col size="md-12">
                        <h1 className="styled3 text-center">Music Man...</h1>
                    </Col>
                </Row>
            </Container>

            <Container>

                <Row>
                    <div className="music-card text-center" style={{ width: "25rem" }}>
                        <div className="music-card-body">
                            <h5 className="music-card-title">Artist</h5>
                            <div className="music-card-footer text-center">
                                <Link to="/music/artist">
                                    <button className="btn-view">Artist</button>
                                </Link>
                            </div>
                            <p className="music-card-text">Artist</p>
                        </div>
                    </div>

                    <div className="music-card text-center" style={{ width: "25rem" }}>
                        <div className="music-card-body">
                            <h5 className="music-card-title">Producer Composer</h5>
                            <div className="music-card-footer text-center">
                                <Link to="/music/production">
                                    <button className="btn-view">Producer Composer</button>
                                </Link>
                            </div>
                            <p className="music-card-text">Have Chaz produce for you</p>
                        </div>
                    </div>

                    <div className="music-card text-center" style={{ width: "25rem" }}>
                        <div className="music-card-body">
                            <h5 className="music-card-title">Da Bauls</h5>
                            <div className="music-card-footer text-center">
                                <Link to="/music/daBauls">
                                    <button className="btn-view">Da Bauls</button>
                                </Link>
                            </div>
                            <p className="music-card-text">Da Bauls</p>
                        </div>
                    </div>
                </Row>

            </Container>
        </div>

    )
}

export default Music;