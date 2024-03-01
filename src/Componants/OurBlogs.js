import React from 'react'

const OurBlogs = () => {
  return (
    <section id="blog" class="blog">
      <div class="container py-4">
        <div class="section-header text-center my-5">
          <h2>latest blog</h2>
        </div>
        <div class="blog-content">
          <div class="row justify-content-around">
            <div class="col-md-4 col-sm-6">
              <div
                class="single-blog wow bounceInDown"
                data-wow-delay="0s"
                data-aos="fade-down"
                data-aos-duration="400"
                data-aos-delay="0"
              >
                <div class="single-blog-img">
                  <img src="images/blog/b1.jpg" alt="blog image" />
                  <div class="single-blog-img-overlay"></div>
                </div>
                <div class="single-blog-txt mt-3">
                  <h2>
                    <a href="#" class="text-decoration-none fs-4">
                      Why Brands are Looking at Local Language
                    </a>
                  </h2>
                  <h3>
                    By{" "}
                    <a href="#" class="text-decoration-none">
                      Robert Norby
                    </a>{" "}
                    / 18th March 2018
                  </h3>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt....
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div
                class="single-blog wow bounceInDown"
                data-aos="fade-down"
                data-aos-duration="400"
                data-aos-delay="400"
              >
                <div class="single-blog-img">
                  <img src="images/blog/b2.jpg" alt="blog image" />
                  <div class="single-blog-img-overlay"></div>
                </div>
                <div class="single-blog-txt mt-3">
                  <h2>
                    <a href="#" class="text-decoration-none fs-4">
                      Why Brands are Looking at Local Language
                    </a>
                  </h2>
                  <h3>
                    By{" "}
                    <a href="#" class="text-decoration-none">
                      Robert Norby
                    </a>{" "}
                    / 18th March 2018
                  </h3>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt....
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div
                class="single-blog wow bounceInDown"
                data-aos="fade-down"
                data-aos-duration="400"
                data-aos-delay="800"

              >
                <div class="single-blog-img">
                  <img src="images/blog/b3.jpg" alt="blog image" />
                  <div class="single-blog-img-overlay"></div>
                </div>
                <div class="single-blog-txt mt-3">
                  <h2>
                    <a href="#" class="text-decoration-none fs-4">
                      Why Brands are Looking at Local Language
                    </a>
                  </h2>
                  <h3>
                    By{" "}
                    <a href="#" class="text-decoration-none">
                      Robert Norby
                    </a>{" "}
                    / 18th March 2018
                  </h3>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt....
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurBlogs