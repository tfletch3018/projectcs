import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
// import home from "../images/home.jpg";
import "../index.css";

function Resume() {
    return (
        <div className="music">
            <Container fluid style={{ marginTop: 100 }}>
                <Row>
                    <Col size="md-12">
                        <h1 className="text-center">Resume</h1>
                    </Col>
                </Row>
            </Container>

            <Container fluid style={{ marginTop: 150 }}>
                <Row>
                    <Col size="md-12">
                        <h1 className="text-center styled3">Coming Soon!</h1>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Resume;