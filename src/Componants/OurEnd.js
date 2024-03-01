import React from 'react'

const OurEnd = () => {
  return (
    <footer id="footer" class="footer">
      <div class="container">
        <div class="hm-footer-copyright text-center">
          <div
            class="footer-social wow bounceInLeft"
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-delay="800"
          >
            <a href="#">
              <i class="fa fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin-in"></i>
            </a>
            <a href="#">
              <i class="fa fa-pinterest"></i>
            </a>
            <a href="#">
              <i class="fa fa-behance"></i>
            </a>
          </div>
          <p
            class="wow bounceInRight"
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-delay="800"
          >
            &copy;copyright. designed and developed by{" "}
            <a href="#">HASSAN(ELAomery)</a>
          </p>
        </div>
      </div>

      <div id="scroll-Top">
        <div class="return-to-top">
          <i
            class="fa fa-angle-up "
            id="scroll-top"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Back to Top"
            aria-hidden="true"
          ></i>
        </div>
      </div>
    </footer>
  );
}

export default OurEnd