
import Slider from "react-slick";
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Home() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1285,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <Container fluid>
    <Row className = "hero-img cover-container h-600 d-flex flex-column align-items-center justify-content-center">
        <h1 className = "branded-white text-center">Furnishing Nostalgia, One Piece at a Time</h1>
        <Button type ="button" className = "bg-orange mt-5 home-button">
        <Link to = "/shop" className = "text-white text-decoration-none" >Shop the Collection</Link>
        </Button>
    </Row>
    <Row>
        <h3 className = "text-white mt-5 mb-5 blk-outline text-center">Shop Vintage Vibes with Modern Comfort</h3>
        <Slider {...settings} className = "mb-5">
          <div >
            <div className = "sofa-bg slider-card d-flex flex-column align-items-center justify-content-center">
                <h2 className = "branded-white-black text-center">Sofas</h2>
            </div>
          </div>
          <div>
            <div className = "chair-bg slider-card d-flex flex-column align-items-center justify-content-center">
                <h2 className = "branded-white-black text-center">Chairs</h2>
            </div>
          </div>
          <div>
            <div className = "cab-bg slider-card d-flex flex-column align-items-center justify-content-center">
                <h2 className = "branded-white-black text-center">Cabinets</h2>
            </div>
          </div>
          <div>
            <div className = "lamp-bg slider-card d-flex flex-column align-items-center justify-content-center">
                <h2 className = "branded-white-black text-center">Lamps</h2>
            </div>
          </div>
          <div>
            <div className = "rug-bg slider-card d-flex flex-column align-items-center justify-content-center">
                <h2 className = "branded-white-black text-center">Rugs</h2>
            </div>
          </div>
          <div>
            <div className = "light-bg slider-card d-flex flex-column align-items-center justify-content-center">
                <h2 className = "branded-white-black text-center">Lighting</h2>
            </div>
          </div>
          <div>
            <div className = "table-bg slider-card d-flex flex-column align-items-center justify-content-center">
                <h2 className = "branded-white-black text-center">Tables</h2>
            </div>
          </div>
        </Slider>
    </Row>
    </Container>
  )
}

export default Home