import { Carousel, Container } from "react-bootstrap";

function MyCarousel() {
  return (
    <Carousel id="carouselExampleCaptions" className="pb-5">
      <Carousel.Indicators>
        <Carousel.Indicator
          style={{ backgroundColor: "#e99c2e" }}
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          active
        />
        <Carousel.Indicator
          style={{ backgroundColor: "#e99c2e" }}
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
        />
        <Carousel.Indicator
          style={{ backgroundColor: "#e99c2e" }}
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
        />
      </Carousel.Indicators>
      <Carousel.Item>
        <Container>
          <div className="welcome-hero-content">
            <div className="row">
              <div className="col-md-6 col-lg-7 pt-4 mt-4">
                <div className="single-welcome-hero">
                  <div className="welcome-hero-txt p-sm-2 p-lg-4 ps-lg-5">
                    <h4>great design collection</h4>
                    <h2>cloth covered accent chair</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiuiana smod tempor ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip.
                    </p>
                    <div className="packages-price">
                      <p>
                        $ 399.00
                        <del>$ 499.00</del>
                      </p>
                    </div>
                    <button
                      className="btn-cart welcome-add-cart ms-4 fs-5 p-3 px-5"
                      onClick={() => (window.location.href = "#")}
                    >
                      <span className="lnr lnr-plus-circle"></span>
                      add <span>to</span> cart
                    </button>
                    <button
                      className="btn-cart welcome-add-cart welcome-more-info ms-3 fs-5 p-3 px-5"
                      onClick={() => (window.location.href = "#")}
                    >
                      more info
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-8 col-md-6 col-lg-5">
                <div className="single-welcome-hero">
                  <div className="welcome-hero-img">
                    <img src="/images/slider/slider1.png" alt="slider image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Carousel.Item>
      {/* Repeat Carousel.Item for each item */}
      <Carousel.Item>
        <Container>
          <div className="welcome-hero-content">
            <div className="row">
              <div className="col-md-6 col-lg-7 pt-4 mt-4">
                <div className="single-welcome-hero">
                  <div className="welcome-hero-txt p-sm-2 p-lg-4 ps-lg-5">
                    <h4>great design collection</h4>
                    <h2>mapple wood accent chair</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiuiana smod tempor ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip.
                    </p>
                    <div className="packages-price">
                      <p>
                        $ 199.00
                        <del>$ 299.00</del>
                      </p>
                    </div>
                    <button
                      className="btn-cart welcome-add-cart ms-4 fs-5 p-3 px-5"
                      onClick={() => (window.location.href = "#")}
                    >
                      <span className="lnr lnr-plus-circle"></span>
                      add <span>to</span> cart
                    </button>
                    <button
                      className="btn-cart welcome-add-cart welcome-more-info ms-3 fs-5 p-3 px-5"
                      onClick={() => (window.location.href = "#")}
                    >
                      more info
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-8 col-md-6 col-lg-5">
                <div className="single-welcome-hero">
                  <div className="welcome-hero-img">
                    <img src="/images/slider/slider2.png" alt="slider image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Carousel.Item>
      {/* Repeat Carousel.Item for each item */}
      <Carousel.Item>
        <Container>
          <div className="welcome-hero-content">
            <div className="row">
              <div className="col-md-6 col-lg-7 pt-4 mt-4">
                <div className="single-welcome-hero">
                  <div className="welcome-hero-txt p-sm-2 p-lg-4 ps-lg-5">
                    <h4>great design collection</h4>
                    <h2>valvet accent arm chair</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiuiana smod tempor ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip.
                    </p>
                    <div className="packages-price">
                      <p>
                        $ 299.00
                        <del>$ 399.00</del>
                      </p>
                    </div>
                    <button
                      className="btn-cart welcome-add-cart ms-4 fs-5 p-3 px-5"
                      onClick={() => (window.location.href = "#")}
                    >
                      <span className="lnr lnr-plus-circle"></span>
                      add <span>to</span> cart
                    </button>
                    <button
                      className="btn-cart welcome-add-cart welcome-more-info ms-3 fs-5 p-3 px-5"
                      onClick={() => (window.location.href = "#")}
                    >
                      more info
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-8 col-md-6 col-lg-5">
                <div className="single-welcome-hero">
                  <div className="welcome-hero-img">
                    <img src="/images/slider/slider3.png" alt="slider image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Carousel.Item>
      {/* Repeat Carousel.Item for each item */}
    </Carousel>
  );
}

export default MyCarousel;
