import React from "react";

const FeaturesSection = () => {
  return (
    <>
      <section id="features" className="features">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <span>Why us</span>
            <h2>Why us</h2>
          </div>

          <div
            className="row gy-4 align-items-center features-item"
            data-aos="fade-up"
          >
            <div className="col-md-5">
              <img
                src="assets/img/features-1.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-7">
              <h3>Advanced Technology and Digital Solutions</h3>
              <p className="fst-italic">
                We leverage cutting-edge technology to enhance every aspect of
                your logistics operations. From automated warehouse management
                systems to real-time shipment tracking and digital
                documentation, our solutions optimize efficiency and provide
                actionable insights. Our technology-driven approach ensures
                transparency, accuracy, and superior control over your logistics
                processes.
              </p>
              {/* <ul>
                <li>
                  <i className="bi bi-check"></i> We leverage advanced
                  technologies to enhance visibility and streamline logistics
                  processes.
                </li>
                <li>
                  <i className="bi bi-check"></i> From real-time tracking and
                  digital documentation to automated warehouse management
                  systems, our technology-driven solutions optimize efficiency
                  and provide actionable insights.
                </li>
              </ul> */}
            </div>
          </div>
          {/* <!-- Features Item --> */}

          <div
            className="row gy-4 align-items-center features-item"
            data-aos="fade-up"
          >
            <div className="col-md-5 order-1 order-md-2">
              <img
                src="assets/img/features-2.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-7 order-2 order-md-1">
              <h3>Global Network and Strategic Partnerships</h3>
              <p className="fst-italic">
                Our extensive global network and strategic partnerships allow us
                to provide seamless logistics solutions across borders. With a
                presence in key markets and collaborations with trusted partners
                worldwide, we offer comprehensive transportation, customs
                clearance, warehousing, and distribution services. We ensure
                efficient coordination, compliance, and timely delivery,
                regardless of the geographical scope of your operations.
              </p>
              <p></p>
            </div>
          </div>
          {/* <!-- Features Item --> */}

          <div
            className="row gy-4 align-items-center features-item"
            data-aos="fade-up"
          >
            <div className="col-md-5">
              <img
                src="assets/img/features-3.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-7">
              <h3>Customized Solutions and Expert Consultation</h3>
              <p>
                We understand that each business has unique logistics
                requirements. Our team of experienced professionals takes a
                consultative approach to understand your specific challenges and
                goals. We develop customized logistics strategies that align
                with your business objectives, optimize processes, and drive
                sustainable growth. Our expertise spans various industries,
                ensuring tailored solutions that address your specific needs.
              </p>
            </div>
          </div>
          {/* <!-- Features Item --> */}

          <div
            className="row gy-4 align-items-center features-item"
            data-aos="fade-up"
          >
            <div className="col-md-5 order-1 order-md-2">
              <img
                src="assets/img/features-4.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-7 order-2 order-md-1">
              <h3>Exceptional Customer Service and Continuous Support</h3>
              <p className="fst-italic">
                We prioritize customer satisfaction above all else. Our
                dedicated customer service team provides personalized support,
                prompt responses, and proactive communication throughout your
                logistics journey. We believe in building long-term partnerships
                based on trust, transparency, and mutual success. As your
                logistics partner, we are committed to continuously improving
                our services, addressing your evolving needs, and exceeding your
                expectations.
              </p>
            </div>
          </div>
          {/* <!-- Features Item --> */}
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
