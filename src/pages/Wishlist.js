import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wish List"} />
      <BreadCrumb title="Wish List" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt=""
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card--image">
                  <img
                    src="images/watch.jpg"
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
              </div>
              <div className="bg-white px-3 py-3">
                <h5 className="title">
                  Lorem ipsum dolor sit amet consectetur adipisicing{" "}
                </h5>
                <h6 className="price">$100</h6>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt=""
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card--image">
                  <img
                    src="images/watch.jpg"
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
              </div>
              <div className="bg-white px-3 py-3">
                <h5 className="title">
                  Lorem ipsum dolor sit amet consectetur adipisicing{" "}
                </h5>
                <h6 className="price">$100</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
