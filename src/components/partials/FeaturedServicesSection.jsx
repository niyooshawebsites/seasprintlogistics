import React from "react";

const FeaturedServicesSection = () => {
  return (
    <>
      <section id="featured-services" className="featured-services">
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
            >
              <div className="icon flex-shrink-0">
                <i className="fa-solid fa-cart-flatbed"></i>
              </div>
              <div>
                <h4 className="title">Supply Chain Solutions</h4>
                <p className="description">
                  Scalable solutions for your supply chain management
                </p>
              </div>
            </div>
            {/* <!-- End Service Item --> */}

            <div
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="icon flex-shrink-0">
                <i className="fa-solid fa-truck"></i>
              </div>
              <div>
                <h4 className="title">End-to-End Transportation</h4>
                <p className="description">
                  Cost Effective, reliable and efficient shipment options
                </p>
              </div>
            </div>
            {/* <!-- End Service Item --> */}

            <div
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon flex-shrink-0">
                <i className="fa-solid fa-truck-ramp-box"></i>
              </div>
              <div>
                <h4 className="title">Warehousing & Distribution</h4>
                <p className="description">
                  Holistic logistic management for enhanced efficiency
                </p>
              </div>
            </div>
            {/* <!-- End Service Item --> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedServicesSection;
