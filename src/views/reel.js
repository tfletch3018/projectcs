import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import OmdbContainer from "../components/OmdbContainer";
// import home from "../images/home.jpg";
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
                
            </Container>

            <Container>
                <OmdbContainer />
                </Container>
        </div>
    );
}

export default Reel;