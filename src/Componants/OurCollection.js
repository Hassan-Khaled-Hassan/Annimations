import React from "react";
import { Carousel, Container } from "react-bootstrap";

const OurCollection = () => {
  return (
    <Carousel
      fade
      controls={false}
      indicators={false}
      id="carouselExampleFade"
      class="carousel slide carousel-fade pt-0 mb-5"
      data-bs-ride="carousel"
    >
      <Carousel.Item class="carousel-item active wow bounceInLeft">
        <div class="sofa-collection collectionbg1">
          <Container class="container">
            <div class="sofa-collection-txt">
              <h2>unlimited sofa collection</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div class="sofa-collection-price">
                <h4>
                  strting from <span>$ 199</span>
                </h4>
              </div>
              <button
                class="btn-cart welcome-add-cart sofa-collection-btn"
                onclick="window.location.href='#'"
              >
                view more
              </button>
            </div>
          </Container>
        </div>
      </Carousel.Item>
      <Carousel.Item class="carousel-item wow bounceInRight">
        <div class="sofa-collection collectionbg2">
          <Container class="container">
            <div class="sofa-collection-txt">
              <h2>unlimited dainning table collection</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div class="sofa-collection-price">
                <h4>
                  strting from <span>$ 299</span>
                </h4>
              </div>
              <button
                class="btn-cart welcome-add-cart sofa-collection-btn"
                onclick="window.location.href='#'"
              >
                view more
              </button>
            </div>
          </Container>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default OurCollection;
