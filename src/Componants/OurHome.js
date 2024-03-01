import React from 'react'
import { Carousel, Container } from "react-bootstrap";
const OurHome = () => {
  return (
    <Carousel
      controls={false}
      pause="false"
      autoplay={false}
      id="carouselExampleCaptions"
      class="carousel slide pb-5"
      data-bs-ride="carousel"
    >
      <Carousel.Item class="carousel-item active">
        <Container class="container">
          <div class="welcome-hero-content">
            <div class="row">
              <div class=" col-md-6 col-lg-7 pt-4 mt-4">
                <div class="single-welcome-hero">
                  <div class="welcome-hero-txt p-sm-2 p-lg-4 ps-lg-5">
                    <h4>great design collection</h4>
                    <h2>cloth covered accent chair</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiuiana smod tempor ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip.
                    </p>
                    <div class="packages-price">
                      <p>
                        $ 399.00
                        <del>$ 499.00</del>
                      </p>
                    </div>
                    <button
                      class="btn-cart welcome-add-cart   ms-4 fs-5 p-3 px-5"
                      onClick={() => (window.location.href = "#")}
                    >
                      <span class="lnr lnr-plus-circle"></span>
                      add <span>to</span> cart
                    </button>
                    <button
                      class="btn-cart welcome-add-cart welcome-more-info ms-3 fs-5 p-3 px-5"
                      onClick={() => (window.location.href = "#")}
                    >
                      more info
                    </button>
                  </div>
                </div>
              </div>
              <div class=" col-8 col-md-6 col-lg-5">
                <div class="single-welcome-hero">
                  <div class="welcome-hero-img">
                    <img src="images/slider/slider1.png" alt="slider image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Carousel.Item>
      <Carousel.Item class="carousel-item">
        <div class="container">
          <div class="welcome-hero-content">
            <div class="row">
              <div class="col-md-6 col-lg-7 pt-4 mt-4">
                <div class="single-welcome-hero">
                  <div class="welcome-hero-txt p-sm-2 p-lg-4 ps-lg-5">
                    <h4>great design collection</h4>
                    <h2>mapple wood accent chair</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiuiana smod tempor ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip.
                    </p>
                    <div class="packages-price">
                      <p>
                        $ 199.00
                        <del>$ 299.00</del>
                      </p>
                    </div>
                    <button
                      class="btn-cart welcome-add-cart   ms-4 fs-5 p-3 px-5"
                      onClick={() => (window.location.href = "#")}
                    >
                      <span class="lnr lnr-plus-circle"></span>
                      add <span>to</span> cart
                    </button>
                    <button
                      class="btn-cart welcome-add-cart welcome-more-info ms-3 fs-5 p-3 px-5"
                      onClick={() => (window.location.href = "#")}
                    >
                      more info
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-8 col-md-6 col-lg-5">
                <div class="single-welcome-hero">
                  <div class="welcome-hero-img">
                    <img src="images/slider/slider2.png" alt="slider image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item class="carousel-item">
        <div class="container">
          <div class="welcome-hero-content">
            <div class="row">
              <div class="col-md-6 col-lg-7 pt-4 mt-4">
                <div class="single-welcome-hero">
                  <div class="welcome-hero-txt p-sm-2 p-lg-4 ps-lg-5">
                    <h4>great design collection</h4>
                    <h2>valvet accent arm chair</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiuiana smod tempor ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip.
                    </p>
                    <div class="packages-price">
                      <p>
                        $ 299.00
                        <del>$ 399.00</del>
                      </p>
                    </div>
                    <button
                      class="btn-cart welcome-add-cart   ms-4 fs-5 p-3 px-5"
                      onClick={() => (window.location.href = "#")}
                    >
                      <span class="lnr lnr-plus-circle"></span>
                      add <span>to</span> cart
                    </button>
                    <button
                      class="btn-cart welcome-add-cart welcome-more-info ms-3 fs-5 p-3 px-5"
                      onClick={() => (window.location.href = "#")}
                    >
                      more info
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-8 col-md-6 col-lg-5">
                <div class="single-welcome-hero">
                  <div class="welcome-hero-img">
                    <img src="images/slider/slider3.png" alt="slider image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default OurHome