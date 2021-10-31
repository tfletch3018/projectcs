import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "../index.css";

function Improvement() {
    return (
        <div className="improvement">
            <Container fluid style={{ marginTop: 150 }}>
                <Row>
                    <Col size="md-12">
                        <h1 className="styled7 text-center">Social Media...</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Improvement;