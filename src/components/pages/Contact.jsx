import React from "react";
import Breadcrumbs from "../partials/Breadcrumbs";

const Contact = () => {
  return (
    <>
      <main id="main">
        {<Breadcrumbs pageTitle={"Contact"} />}

        {/*<!-- ======= Contact Section ======= --> */}
        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
            <div>
              <iframe
                title="seasprint location"
                style={{
                  border: 0,
                  width: "100%",
                  height: "340px",
                }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6990.02798957438!2d77.11014509249577!3d28.838443352211485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390daa2d019e8c83%3A0x647ad1a8ef2373e0!2sSector%20B-2%2C%20Tikri%20Khurd%2C%20Delhi%2C%20110040!5e0!3m2!1sen!2sin!4v1686861728503!5m2!1sen!2sin"
              ></iframe>
            </div>
            {/* <!-- End Google Maps --> */}

            <div className="row gy-4 mt-4">
              <div className="col-lg-4">
                <div className="info-item d-flex">
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h4>Location:</h4>
                    <p>
                      Flat No. 139, 4th Floor, Pocket -C, Sector-B2, Narela,
                      110040
                    </p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}

                <div className="info-item d-flex">
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h4>Email:</h4>
                    <p>care@seasprintlogistics.com</p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}

                <div className="info-item d-flex">
                  <i className="bi bi-phone flex-shrink-0"></i>
                  <div>
                    <h4>Mobile:</h4>
                    <p>+91 8510961501</p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}

                <div className="info-item d-flex">
                  <i className="bi bi-phone flex-shrink-0"></i>
                  <div>
                    <h4>Landline:</h4>
                    <p>011 47035406</p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}
              </div>

              <div className="col-lg-8">
                <form
                  action="forms/contact.php"
                  method="post"
                  className="php-email-form"
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
              {/* <!-- End Contact Form --> */}
            </div>
          </div>
        </section>
        {/* <!-- End Contact Section --> */}
      </main>
      {/* <!-- End #main --> */}
    </>
  );
};

export default Contact;
