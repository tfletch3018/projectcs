import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import "../index.css";
import "../components/Navbar/style.css";

function Home() {
    return (
        <div className="hero">
            <div className="hero-content">

                <Container>
                    <Row>
                        <h1 className="">
                            <span className="hero-title styled1" id="all">All</span>
                            <span className="hero-title styled1" id="that">That</span>
                            <span className="hero-title styled1" id="chaz">Chaz</span>
                        </h1>
                    </Row>
                </Container>

            </div>
        </div>
    );
}

export default Home;