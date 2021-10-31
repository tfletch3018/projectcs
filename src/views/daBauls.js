import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
// import home from "../images/home.jpg";
import "../index.css";

function daBauls() {
    return (
        <div className="music">
            <Container style={{ marginTop: 100 }}>
                <Row>
                    <Col size="md-12">
                        <h1 className="text-center">Da Bauls</h1>
                    </Col>
                </Row>
            </Container>

            <Container fluid style={{ marginTop: 150 }}>
                <Row>
                    <Col size="md-12">
                        <h1 className="text-center styled3">Coming Soon!</h1>
                    </Col>
                </Row>
                <Row>
                    <div className="text-center">
                        <Link to="/music">
                            <button className="btn-view" 
                            style={{ marginTop: 100 }}>Go Back
                            </button>
                        </Link>
                    </div>
                </Row>

            </Container>
        </div>
    );
}

export default daBauls;