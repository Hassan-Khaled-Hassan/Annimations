import React from "react";

const MyCards = () => {
  return (
    <div class="cards py-5">
      <div class="container  px-md-0 py-5 ps-lg-5">
        <div class="row ps-md-0  ps-lg-5">
          <div class="col-md-5 col-lg-3 ">
            <div
              class="card ml-xs-1 ms-md-0 wow bounceInUp"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="0"
            >
              <img
                src="images/populer-products/p1.png"
                class="card-img-top w-75 m-auto py-4"
                alt="..."
              />
              <div class="card-body px-2">
                <h5 class="card-title text-center text-decoration-none mb-3">
                  <a href="#" class="text-decoration-none">
                    arm chair
                  </a>
                </h5>
                <p class="card-text text-center lh-lg mb-3">
                  Nemo enim ipsam voluptatem quia volu ptas sit asperna aut odit
                  aut fugit.
                </p>
              </div>
            </div>
          </div>
          <div
            class="card mb-3 col-md-5 wow bounceInUp"
            data-aos="fade-up"
            data-aos-duration="400"
            style={{
              maxWidth: "540px",
              marginLeft: "-22px",
              marginRight: "4px",
            }}
            data-aos-delay="300"
          >
            <div class="row g-0" style={{ paddingTop: "2.5rem" }}>
              <div class="col-md-4">
                <img
                  src="images/populer-products/p2.png"
                  class="img-fluid rounded-start mt-5"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Latest Designed Stool and Chair</h5>
                  <p class="card-text">
                    Edi Ut Perspiciatis Unde Omnis Iste Natusina Error Sit
                    Voluptatem Accusantium Doloret Mque Laudantium, Totam Rem
                    Aperiam.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Sales Start from $99.00</small>
                  </p>
                  <button
                    class="btn-cart welcome-add-cart welcome-more-info  fs-5 p-2 px-3"
                    onclick="window.location.href='#'"
                  >
                    discover more
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 third">
            <div
              class="card wow bounceInUp"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="800"
            >
              <img
                src="images/populer-products/p3.png"
                class="card-img-top w-50 m-auto py-4"
                alt="..."
              />
              <div class="card-body px-2">
                <h5 class="card-title text-center text-decoration-none mb-3">
                  <a href="#" class="text-decoration-none">
                    arm chair
                  </a>
                </h5>
                <p class="card-text text-center lh-lg mb-3">
                  Nemo enim ipsam voluptatem quia volu ptas sit asperna aut odit
                  aut fugit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCards;
