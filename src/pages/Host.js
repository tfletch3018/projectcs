import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
// import home from "../images/home.jpg";
import "../index.css";

function Host() {
    return (
        <div className="host">
            <Container fluid style={{ marginTop: 150 }}>
                <Row>
                    <Col size="md-12">
                        <h1 className="styled3 text-center">Host...</h1>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <div className="music-card text-center" style={{ width: "25rem" }}>
                        <div className="music-card-body">
                            <h5 className="music-card-title">Bio</h5>
                            <div className="music-card-footer text-center">
                                <Link to="/host/bio">
                                    <button className="btn-view">Bio</button>
                                </Link>
                            </div>
                            <p className="music-card-text">Bio</p>
                        </div>
                    </div>

                    <div className="music-card text-center" style={{ width: "25rem" }}>
                        <div className="music-card-body">
                            <h5 className="music-card-title">Clips</h5>
                            <div className="music-card-footer text-center">
                                <Link to="/host/clips">
                                    <button className="btn-view">Clips</button>
                                </Link>
                            </div>
                            <p className="music-card-text">Clips</p>
                        </div>
                    </div>

                    <div className="music-card text-center" style={{ width: "25rem" }}>
                        <div className="music-card-body">
                            <h5 className="music-card-title">Request Chaz</h5>
                            <div className="music-card-footer text-center">
                                <Link to="/host/request">
                                    <button className="btn-view">Request Chaz</button>
                                </Link>
                            </div>
                            <p className="music-card-text">Request Chaz</p>
                        </div>
                    </div>
                </Row>

            </Container>
        </div>


        
    );
}

export default Host;