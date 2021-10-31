import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import OmdbContainer from "../components/OmdbContainer";
import "../index.css";

function Reel() {
    return (
        <div className="music">
            <Container fluid style={{ marginTop: 100 }}>
                <Row>
                    <Col size="md-12">
                        <h1 className="text-center">Reel</h1>
                    </Col>
                </Row>
                <Row>
                    <div className="text-center">
                        <Link to="/film">
                            <button className="btn-view">Go Back</button>
                        </Link>
                    </div>
                </Row>
            </Container>

            <Container>
                <OmdbContainer />
                </Container>
        </div>
    );
}

export default Reel;