import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-lg-5 position-relative align-self-start order-lg-last order-first">
              <img
                src="assets/img/national-Logistics-Day.jpg"
                className="img-fluid"
                alt="about"
              />
            </div>
            <div className="col-lg-7 content order-last  order-lg-first">
              <h3 className="mb-5">About Us</h3>
              <p>
                Welcome to Sea Print Logistics, a leading provider of
                comprehensive logistics solutions designed to streamline your
                supply chain and drive your business growth. With a commitment
                to excellence, reliability, and customer satisfaction, we are
                dedicated to revolutionizing the way logistics is done.
                <br />
                <br />
                We understand that the success of your business depends on
                efficient and seamless logistics operations. That's why we go
                above and beyond to deliver tailored solutions that meet your
                unique requirements. Whether you are a small business looking to
                optimize your local transportation or a global enterprise in
                need of a robust supply chain management system, we have the
                expertise and resources to support you every step of the way.
                <br />
                <br />
                Our team of logistics professionals brings years of industry
                experience and deep domain knowledge to the table. We stay
                up-to-date with the latest trends and technologies, allowing us
                to provide innovative solutions that drive efficiency and
                cost-effectiveness. With a customer-centric approach, we focus
                on understanding your specific needs, challenges, and goals,
                enabling us to design customized strategies that deliver
                results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
