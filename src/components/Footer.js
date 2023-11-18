import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row algin-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newletter" />
                <h2 className="mb-0 text-white"> Sign Up For Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your email address"
                  aria-label="Your email address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text py-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us </h4>
              <div>
                <address className="text-white fs-6">Viet Nam</address>
                <a
                  href="tel:0123456789"
                  className="text-white mt-4 d-block mb-1"
                >
                  0123456789
                </a>
                <a
                  href="mailto:user@gmail.com"
                  className="text-white mt-4 d-block mb-0"
                >
                  user@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a href="" className="text-white">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a href="" className="text-white">
                    <BsFacebook className="fs-4" />
                  </a>
                  <a href="" className="text-white">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a href="" className="text-white">
                    <BsYoutube className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Infomation</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="/term-conditions" className="text-white py-2 mb-1">
                  Terms & Conditions
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptop</Link>
                <Link className="text-white py-2 mb-1">Headphone</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 mb-0 text-white">
              <p className="text-center">
                &copy; {new Date().getFullYear()} Power by Developer's Xnavd{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
