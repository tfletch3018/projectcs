import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "../index.css";
// import Gallery from "../components/Gallery/gallery";
import CarouselComponent from "../components/Carousel/index";
// import artist11 from "../images/artist11.jpeg";
// import artist12 from "../images/artist12.jpeg";
// import artist13 from "../images/artist13.jpg";
// import artist14 from "../images/artist14.jpg";
// import artist15 from "../images/artist15.jpg";
// import artist16 from "../images/artist16.jpg";
// import artist17 from "../images/artist17.jpg";
// import artist18 from "../images/artist18.jpg";
// import artist19 from "../images/artist19.jpg";

function Artist() {
    return (
        <div className="music">
            <Container fluid style={{ marginTop: 55 }}>
                <Row>
                    <Col size="md-12">
                        <h1 className="text-center">Artist</h1>
                    </Col>
                </Row>
            </Container>

            
            <Container>
                <CarouselComponent />
            </Container>


            {/* <Container fluid style={{ marginTop: 20 }}>
                <Gallery />
            </Container> */}

            {/* <Container>
                <Row>
                    <div className="artist-card" style={{
                        width: "25rem",
                        backgroundImage: `url(${artist11})`
                    }}>
                    </div>

                    <div className="artist-card" style={{
                        width: "25rem",
                        backgroundImage: `url(${artist12})`
                    }}>
                    </div>

                    <div className="artist-card" style={{
                        width: "25rem",
                        backgroundImage: `url(${artist13})`
                    }}>
                    </div>

                    <div className="artist-card" style={{
                        width: "25rem",
                        backgroundImage: `url(${artist14})`
                    }}>
                    </div>
                
                    <div className="artist-card" style={{
                        width: "25rem",
                        backgroundImage: `url(${artist19})`
                    }}>
                    </div>

                    <div className="artist-card" style={{
                        width: "25rem",
                        backgroundImage: `url(${artist18})`
                    }}>
                    </div>

                    <div className="artist-card" style={{
                        width: "25rem",
                        backgroundImage: `url(${artist17})`
                    }}>
                    </div>

                    <div className="artist-card" style={{
                        width: "25rem",
                        backgroundImage: `url(${artist15})`
                    }}>
                    </div>

                    <div className="artist-card" style={{
                        width: "25rem",
                        backgroundImage: `url(${artist16})`
                    }}>
                    </div>

                </Row>
            </Container> */}

        </div>
    );
}

export default Artist;