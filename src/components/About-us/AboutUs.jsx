import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Sports Council</h2>
              <p>
                Welcome to the Sports Council, where passion for sports meets excellence. We are dedicated to promoting and nurturing sports in our community. Through our efforts, we strive to create a healthier, fitter, and more connected society.
              </p>

              <div className="about__counter">
                <div className="d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={50} duration={2} suffix="+" />
                    </span>

                    <p className="counter__title">Sports Events Organized</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={50} duration={2} suffix="+" />
                    </span>

                    <p className="counter__title">Active Athletes Supported</p>
                  </div>
                </div>

                <div className="d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={15} duration={2} suffix="+" />
                    </span>

                    <p className="counter__title">Sports Disciplines Covered</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={1} duration={2} suffix="+" />
                    </span>

                    <p className="counter__title">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
