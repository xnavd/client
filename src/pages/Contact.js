import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiTwotonePhone,
  AiOutlineMail,
} from "react-icons/ai";

const Contact = () => {
  return (
    <>
      {" "}
      <Meta title={"Contact"} />
      <BreadCrumb title="Contact" />
      <div className="contact-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d621.2023864303662!2d105.9588075829157!3d21.296571241823266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1svi!2s!4v1700165477575!5m2!1svi!2s"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        placeholder="Name"
                        className="form-control"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Email"
                        className="form-control"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Mobile Phone"
                        className="form-control"
                      />
                    </div>
                    <div>
                      <textarea
                        className="w-100 form-control"
                        name=""
                        id=""
                        cols="30"
                        rows="5"
                        placeholder="Comment"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Send</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex align-align-items-center gap-15">
                        <AiOutlineHome className="fs-5" />
                        <address>Hà Nội - Việt Nam</address>
                      </li>
                      <li className="mb-3 d-flex align-align-items-center gap-15">
                        <AiTwotonePhone className="fs-5" />
                        <a href="tel:0962324283">0962324283</a>
                      </li>
                      <li className="mb-3 d-flex align-align-items-center gap-15">
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto:email@gmail.com">email@gmail.com</a>
                      </li>
                      <li className="mb-3 d-flex align-align-items-center gap-15">
                        <AiOutlineInfoCircle className="fs-5" />
                        <p>Monday - Sunday: 8AM- 6PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
