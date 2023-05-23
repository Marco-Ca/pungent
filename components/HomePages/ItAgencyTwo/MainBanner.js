import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div
        className="hero-banner it-banner overly bg-fixed"
        style={{
          backgroundImage: `url(/images/hero-banner14.jpg)`
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="main-banner-content">
                    <h1
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      Virtual Tours
                    </h1>

                    <p
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      data-aos-delay="200"
                    >
                      Bring the power of immersive experiences to your business
                    </p>

                    <div
                      data-aos="fade-up"
                      data-aos-duration="1300"
                      data-aos-delay="300"
                    >
                      <a href="#contact" className="btn btn-primary">
                        Get Started
                      </a>

                      <a
                        className="btn btn-secondary"
                        href="#samples"
                      >
                        How it works
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    className="animate-banner-image"
                    data-aos="zoom-in"
                    data-aos-duration="1200"
                  >
                    <img
                      src="/images/used/vt1.jpeg"
                      alt="Animate image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="oval-shape">
          <img
            src="/images/oval-shape.png"
            alt="Shape"
          />
        </div>
      </div>
    </>
  );
}

export default MainBanner;