import React from "react";
import { Link } from "react-router-dom";
import ServiceSection from "../partials/ServiceSection";
import AboutSection from "../partials/AboutSection";
import FeaturedServicesSection from "../partials/FeaturedServicesSection";
import FeaturesSection from "../partials/FeaturesSection";
import TestimonialsSection from "../partials/TestimonialsSection";
import ScrollUp from "../partials/ScrollUp";

const Home = () => {
  return (
    <>
      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row gy-4 d-flex justify-content-between">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h2 data-aos="fade-up">Your Lightning Fast Logistics Partner</h2>
              <p data-aos="fade-up" data-aos-delay="100">
                Unlock the Power of Seamless Logistics. From transportation to
                warehousing, our integrated solutions drive efficiency,
                reliability, and growth. Experience streamlined operations,
                timely deliveries, and a competitive edge. Get ready to elevate
                your logistics game.
              </p>

              {/* <form
                action="#"
                className="form-search d-flex align-items-stretch mb-3"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="ZIP code or CitY"
                />
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </form> */}

              <div className="row gy-4" data-aos="fade-up" data-aos-delay="400">
                <div className="col-lg-3 col-6">
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

                <div className="col-lg-3 col-6">
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

                <div className="col-lg-3 col-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="1453"
                      data-purecounter-duration="1"
                      className="purecounter"
                    ></span>
                    <p>Support</p>
                    <h1>24/7</h1>
                  </div>
                </div>
                {/* <!-- End Stats Item --> */}

                <div className="col-lg-3 col-6">
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

            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-out"
            >
              <img
                src="assets/img/pngtree.png"
                className="img-fluid mb-3 mb-lg-0"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Hero Section --> */}

      <main id="main">
        {/* <!-- ======= Featured Services Section ======= --> */}
        <FeaturedServicesSection />
        {/* <!-- End Featured Services Section --> */}

        {/* <!-- ======= About Us Section ======= --> */}
        <AboutSection />
        {/* <!-- End About Us Section --> */}

        {/* <!-- ======= Services Section ======= --> */}
        <ServiceSection />
        {/* <!-- End Services Section -->

    <!-- ======= Call To Action Section ======= --> */}
        <section id="call-to-action" className="call-to-action">
          <div className="container" data-aos="zoom-out">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h3>Seasprint Logistics</h3>
                <p>
                  Ready to enhance your logistics operations?
                  <br /> Contact us now to discuss how our comprehensive
                  solutions can streamline your supply chain, increase
                  efficiency, and drive your business forward. Let's work
                  together to achieve your logistics goals.
                </p>
                <Link className="cta-btn" to="/contact">
                  Call us Now
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Call To Action Section -->

    <!-- ======= Features Section ======= --> */}
        <FeaturesSection />
        {/* <!-- End Features Section --> */}
      </main>
      {/* <!-- End #main --> */}
      <ScrollUp />
    </>
  );
};

export default Home;
