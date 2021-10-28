import React from "react";
import { Container, Button } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner py-5">
      <Container className="my-5 py-5">
        <div className="text-center text-white fw-bold">
          <h5 className="text-warning">WELCOME TO AVENTOURA</h5>
          <h1 className="fs-1  fw-bolder">Explore new worlds with us</h1>
          <p className="text-white">
            The world’s first luxury travel subscription just got even better.
            <br />
            Still no nightly rates, taxes, or fees, and now with more
            flexibility, value, and trips than ever before
          </p>
          <Button
            variant="warning"
            className="text-white px-5 py-3 fw-bold me-2"
          >
            Book now
          </Button>
          <Button
            variant="secondary"
            className="text-white px-5 py-3 fw-bold me-2"
          >
            Discover more
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
