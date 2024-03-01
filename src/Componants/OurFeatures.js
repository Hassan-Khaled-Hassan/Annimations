import React from 'react'

const OurFeatures = () => {
  return (
    <section id="feature" class="feature">
      <div class="container py-4" style={{ maxWidth: "1190px" }}>
        <div class="section-header text-center my-5">
          <h2>featured products</h2>
        </div>
        <div class="feature-content mt-5">
          <div class="row">
            <div class="col-sm-3 col-xl-3">
              <div
                class="single-feature wow bounceInUp"
                data-wow-delay="0s"
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay="0"
              >
                <img src="images/features/f1.jpg" alt="feature image" />
                <div class="single-feature-txt text-center mt-4">
                  <p>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <span class="spacial-feature-icon">
                      <i class="fa fa-star"></i>
                    </span>
                    <span class="feature-review">(45 review)</span>
                  </p>
                  <h3>
                    <a href="#" class="text-decoration-none">
                      designed sofa
                    </a>
                  </h3>
                  <h5>$160.00</h5>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-xl-3">
              <div
                class="single-feature wow bounceInUp"
                data-wow-delay="0.4s"
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay="400"
              >
                <img src="images/features/f2.jpg" alt="feature image" />
                <div class="single-feature-txt text-center mt-4">
                  <p>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <span class="spacial-feature-icon">
                      <i class="fa fa-star"></i>
                    </span>
                    <span class="feature-review">(45 review)</span>
                  </p>
                  <h3>
                    <a href="#" class="text-decoration-none">
                      dinning table{" "}
                    </a>
                  </h3>
                  <h5>$200.00</h5>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-xl-3">
              <div
                class="single-feature wow bounceInUp"
                data-wow-delay="0.6s"
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay="800"
              >
                <img src="images/features/f3.jpg" alt="feature image" />
                <div class="single-feature-txt text-center mt-4">
                  <p>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <span class="spacial-feature-icon">
                      <i class="fa fa-star"></i>
                    </span>
                    <span class="feature-review">(45 review)</span>
                  </p>
                  <h3>
                    <a href="#" class="text-decoration-none">
                      chair and table
                    </a>
                  </h3>
                  <h5>$100.00</h5>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-xl-3">
              <div
                class="single-feature wow bounceInUp"
                data-wow-delay="0.8s"
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay="1300"
              >
                <img src="images/features/f4.jpg" alt="feature image" />
                <div class="single-feature-txt text-center mt-4">
                  <p>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <span class="spacial-feature-icon">
                      <i class="fa fa-star"></i>
                    </span>
                    <span class="feature-review">(45 review)</span>
                  </p>
                  <h3>
                    <a href="#" class="text-decoration-none">
                      modern arm chair
                    </a>
                  </h3>
                  <h5>$299.00</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurFeatures