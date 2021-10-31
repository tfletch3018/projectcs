import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import YouTubeContainer from "../components/YouTube";
import "../index.css";
import VideoPlayer from "../components/VideoPlayer";

function artistVids() {
    return (
        <div className="music">
            <Container fluid style={{ marginTop: 55 }}>
                <Row>
                    <Col size="md-12">
                        <h1 className="text-center">Videos</h1>
                    </Col>
                </Row>

                <Container fluid style={{ marginTop: 20, marginBottom: 20 }}>
                <Row>
                    <Col size="md-6">
                        <p className="foot">We Will Breathe</p>
                        <YouTubeContainer />
                    </Col>

                    <Col size="md-6">
                    <p className="foot">Demo Video</p>
                        <VideoPlayer />
                    </Col>
                </Row>
                </Container>
            </Container>

        </div>
    );
}

export default artistVids;