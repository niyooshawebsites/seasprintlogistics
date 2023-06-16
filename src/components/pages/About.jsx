import React from "react";
import Breadcrumbs from "../partials/Breadcrumbs";
import AboutSection from "../partials/AboutSection";

const About = () => {
  return (
    <>
      {" "}
      <main id="main">
        {/* <!-- ======= Breadcrumbs ======= --> */}
        <Breadcrumbs pageTitle={"About"} />
        {/* <!-- End Breadcrumbs -->

  <!-- ======= About Us Section ======= --> */}
        <AboutSection />
        {/* <!-- End About Us Section -->

  <!-- ======= Stats Counter Section ======= --> */}
        <section id="stats-counter" className="stats-counter pt-0">
          <div className="container" data-aos="fade-up">
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="232"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Clients</p>
                  <h1>400+</h1>
                </div>
              </div>
              {/* <!-- End Stats Item --> */}

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="521"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Projects</p>
                  <h1>150+</h1>
                </div>
              </div>
              {/* <!-- End Stats Item --> */}

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="1453"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Hours Of Support</p>
                  <h1>24/7</h1>
                </div>
              </div>
              {/* <!-- End Stats Item --> */}

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="32"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Workers</p>
                  <h1>350+</h1>
                </div>
              </div>
              {/* <!-- End Stats Item --> */}
            </div>
          </div>
        </section>
        {/* <!-- End Stats Counter Section -->*/}
      </main>
      {/* <!-- End #main --> */}
    </>
  );
};

export default About;
