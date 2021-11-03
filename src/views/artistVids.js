import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import YouTubeContainer from "../components/YouTube";
import "../index.css";
import VideoPlayer from "../components/VideoPlayer";
import VideoPlayer2 from "../components/VideoPlayer2";

function artistVids() {
    return (
        <div className="music">
            <Container fluid style={{ marginTop: 50 }}>
                <Row>
                    <Col size="md-12">
                        <h1 className="text-center">Videos</h1>
                    </Col>
                </Row>
                <Row>
                    <div className="text-center">
                        <Link to="/music/artist">
                            <button className="btn-view">Go Back</button>
                        </Link>
                    </div>
                </Row>
                </Container>

                <Container fluid style={{ marginTop: 20, marginBottom: 20 }}>
                <Row>
                <Col size="md-6">
                    <p className="foot">How Does It Feel pviff awards</p>
                        <VideoPlayer2 />
                    </Col>
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

        </div>
    );
}

export default artistVids;