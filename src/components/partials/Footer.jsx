import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 col-md-12 footer-info">
              <Link to="/" className="logo d-flex align-items-center">
                <span>SEASPRINT LOGISTICS</span>
              </Link>
              <p className="pt-3">
                Welcome to Sea Print Logistics, a leading provider of
                comprehensive logistics solutions designed to streamline your
                supply chain and drive your business growth. With a commitment
                to excellence, reliability, and customer satisfaction, we are
                dedicated to revolutionizing the way logistics is done
              </p>
              <div className="social-links d-flex mt-4">
                <Link to="#" className="twitter">
                  <i className="bi bi-twitter"></i>
                </Link>
                <Link to="#" className="facebook">
                  <i className="bi bi-facebook"></i>
                </Link>
                <Link to="#" className="instagram">
                  <i className="bi bi-instagram"></i>
                </Link>
                <Link to="#" className="linkedin">
                  <i className="bi bi-linkedin"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/quote">Get a Quote</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                <span>Flat No. 139, 4th Floor, </span> <br />
                <span>Pocket -C, Sector-B2, Narela, 110040</span>
                <br />
                <span>India</span> <br />
                <br />
                <strong>Mobile:</strong> +91 8510961501
                <br />
                <strong>Email:</strong> care@seasprintlogistics.com
                <br />
              </p>
            </div>
          </div>
          <div className="container mt-4">
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>Logis</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              Designed by{" "}
              <Link to="https://niyooshawebsites.com/" target="_blank">
                Niyoosha Websites
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
