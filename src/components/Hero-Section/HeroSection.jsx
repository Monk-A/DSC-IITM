import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img1.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
              Got Stick?<br />  “It is not my country's duty to push me ahead. It is my duty to push my country ahead.”
              </h2>
          
              <p className="mb-5">
                
              </p>
            </div>
            <p className="mb-5">
                <button className="btn btn-primary">Click to Join
            </button>
              </p>
          
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img"  />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
