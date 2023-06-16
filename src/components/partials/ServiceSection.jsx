import React from "react";

const ServiceSection = () => {
  return (
    <>
      <section id="service" className="services pt-0">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <span>Our Services</span>
            <h2>Our Services</h2>
          </div>

          <div className="row gy-4">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="card">
                <div className="card-img">
                  <img
                    src="assets/img/storage-service.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <h3>
                  <a href="service-details.html" className="stretched-link">
                    Storage
                  </a>
                </h3>
                <p>
                  Efficient and secure storage solutions tailored to your needs.
                  Warehousing, temperature-controlled storage, inventory
                  management, fulfillment services, and customizable options.
                  Maximize space utilization, streamline operations, and ensure
                  the smooth flow of goods. Contact us today for reliable and
                  cost-effective storage services.
                </p>
              </div>
            </div>
            {/* <!-- End Card Item --> */}

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="card">
                <div className="card-img">
                  <img
                    src="assets/img/logistics-service.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <h3>
                  <a href="service-details.html" className="stretched-link">
                    Logistics
                  </a>
                </h3>
                <p>
                  Streamline your supply chain with our comprehensive logistics
                  services. We offer end-to-end solutions, including
                  transportation, warehousing, inventory management, order
                  fulfillment, and distribution. Our expertise and cutting-edge
                  technologies ensure efficient operations and timely delivery.
                  Contact us to optimize your logistics processes and enhance
                  your business performance.
                </p>
              </div>
            </div>
            {/* <!-- End Card Item --> */}

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="card">
                <div className="card-img">
                  <img
                    src="assets/img/cargo-service.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <h3>
                  <a href="service-details.html" className="stretched-link">
                    Cargo
                  </a>
                </h3>
                <p>
                  Safely transport your cargo with our reliable logistics
                  solutions. We handle a wide range of cargo types, including
                  perishables, hazardous materials, and oversized shipments. Our
                  experienced team ensures efficient handling, secure packaging,
                  and timely delivery. Trust us for seamless cargo
                  transportation that meets your unique requirements.
                </p>
              </div>
            </div>
            {/* <!-- End Card Item --> */}

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="card">
                <div className="card-img">
                  <img
                    src="assets/img/trucking-service.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <h3>
                  <a href="service-details.html" className="stretched-link">
                    Trucking
                  </a>
                </h3>
                <p>
                  Our trucking services provide reliable and efficient
                  transportation solutions for your goods. With a fleet of
                  well-maintained vehicles and experienced drivers, we ensure
                  safe and timely delivery across various distances. From small
                  shipments to large loads, our trucking services offer
                  flexibility and cost-effectiveness.
                </p>
              </div>
            </div>
            {/* <!-- End Card Item --> */}

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="card">
                <div className="card-img">
                  <img
                    src="assets/img/packaging-service.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <h3>
                  <a href="service-details.html" className="stretched-link">
                    Packaging
                  </a>
                </h3>
                <p>
                  Our packaging section offers comprehensive solutions to ensure
                  the safe and secure handling of your goods. With expertise in
                  packaging design and materials, we provide customized
                  packaging solutions tailored to your product requirements.
                  Trust us for efficient packaging that protects your items
                  throughout the logistics process.
                </p>
              </div>
            </div>
            {/* <!-- End Card Item --> */}

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="card">
                <div className="card-img">
                  <img
                    src="assets/img/warehousing-service.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <h3>
                  <a href="service-details.html" className="stretched-link">
                    Warehousing
                  </a>
                </h3>
                <p>
                  Our warehousing section provides secure and spacious
                  facilities for your storage needs. Equipped with advanced
                  inventory management systems, our warehouses ensure accurate
                  tracking and efficient retrieval of your inventory. Trust us
                  for cost-effective warehousing solutions that optimize space
                  utilization and streamline your supply chain.
                </p>
              </div>
            </div>
            {/* <!-- End Card Item --> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
