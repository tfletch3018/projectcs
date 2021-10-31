import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
// import home from "../images/home.jpg";
import "../index.css";

function Improvement() {
    return (
        <div className="improvement">
            <Container fluid style={{ marginTop: 100 }}>
                <Row>
                    <Col size="md-12">
                        <h1 className="styled3 text-center">Improvement Movement...</h1>
                    </Col>
                </Row>
            </Container>

            <Container fluid style={{ marginTop: 20 }}>
                <Row>
                    <div className="music-card text-center" style={{ width: "25rem" }}>
                        <div className="music-card-body">
                            <h5 className="music-card-title">Fatherhood Challenge</h5>
                            <div className="music-card-footer text-center">
                                <Link to="/improvement/challenge">
                                    <button className="btn-view">Take the Challenge</button>
                                </Link>
                            </div>
                            <p className="music-card-text">Fatherhood Challenge</p>
                        </div>
                    </div>

                </Row>
            </Container>

        </div>
    );
}

export default Improvement;