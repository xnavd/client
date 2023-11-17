import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const {grid} = props;
  let location = useLocation();

  return (
    <>
    <div
      className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"} `}
    >
      <div className="product-card py-4 position-relative">
        <div>
          <Link>
            <div className="wishlist-icon position-absolute ">
              <Link>
                <img src="images/wish.svg" alt="wishlist" />
              </Link>
            </div>
            <div className="product-image">
              <img
                src="images/watch.jpg"
                alt="product_image"
                className="img-fluid"
              />
              <img
                src="images/tv.jpg"
                alt="product_image"
                className="img-fluid"
              />
            </div>
            <div className="product-details">
              <h6 className="brand">Apple</h6>
              <h5 className="product-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </h5>
              <ReactStars
                count={5}
                size={22}
                activeColor="#ffd700"
                value={3}
                edit={false}
              />
              <p className="price">$100</p>
            </div>
          </Link>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="prodcompare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"} `}
    >
      <div className="product-card position-relative">
        <div>
          <Link>
            <div className="wishlist-icon position-absolute ">
              <Link>
                <img src="images/wish.svg" alt="wishlist" />
              </Link>
            </div>
            <div className="product-image">
              <img
                src="images/watch.jpg"
                alt="product_image"
                className="img-fluid"
              />
              <img
                src="images/tv.jpg"
                alt="product_image"
                className="img-fluid"
              />
            </div>
            <div className="product-details">
              <h6 className="brand">Apple</h6>
              <h5 className="product-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </h5>
              <ReactStars
                count={5}
                size={22}
                activeColor="#ffd700"
                value={3}
                edit={false}
              />
              <p className="price">$100</p>
            </div>
          </Link>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="prodcompare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"} `}
    >
      <div className="product-card position-relative">
        <div>
          <Link>
            <div className="wishlist-icon position-absolute ">
              <Link>
                <img src="images/wish.svg" alt="wishlist" />
              </Link>
            </div>
            <div className="product-image">
              <img
                src="images/watch.jpg"
                alt="product_image"
                className="img-fluid"
              />
              <img
                src="images/tv.jpg"
                alt="product_image"
                className="img-fluid"
              />
            </div>
            <div className="product-details">
              <h6 className="brand">Apple</h6>
              <h5 className="product-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </h5>
              <ReactStars
                count={5}
                size={22}
                activeColor="#ffd700"
                value={3}
                edit={false}
              />
              <p className="price">$100</p>
            </div>
          </Link>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="prodcompare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"} `}
    >
      <div className="product-card position-relative">
        <div>
          <Link>
            <div className="wishlist-icon position-absolute ">
              <Link>
                <img src="images/wish.svg" alt="wishlist" />
              </Link>
            </div>
            <div className="product-image">
              <img
                src="images/watch.jpg"
                alt="product_image"
                className="img-fluid"
              />
              <img
                src="images/tv.jpg"
                alt="product_image"
                className="img-fluid"
              />
            </div>
            <div className="product-details">
              <h6 className="brand">Apple</h6>
              <h5 className="product-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </h5>
              <ReactStars
                count={5}
                size={22}
                activeColor="#ffd700"
                value={3}
                edit={false}
              />
              <p className="price">$100</p>
            </div>
          </Link>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="prodcompare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"} `}
    >
      <div className="product-card position-relative">
        <div>
          <Link>
            <div className="wishlist-icon position-absolute ">
              <Link>
                <img src="images/wish.svg" alt="wishlist" />
              </Link>
            </div>
            <div className="product-image">
              <img
                src="images/watch.jpg"
                alt="product_image"
                className="img-fluid"
              />
              <img
                src="images/tv.jpg"
                alt="product_image"
                className="img-fluid"
              />
            </div>
            <div className="product-details">
              <h6 className="brand">Apple</h6>
              <h5 className="product-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </h5>
              <ReactStars
                count={5}
                size={22}
                activeColor="#ffd700"
                value={3}
                edit={false}
              />
              <p className="price">$100</p>
            </div>
          </Link>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="prodcompare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"} `}
    >
      <div className="product-card position-relative">
        <div>
          <Link>
            <div className="wishlist-icon position-absolute ">
              <Link>
                <img src="images/wish.svg" alt="wishlist" />
              </Link>
            </div>
            <div className="product-image">
              <img
                src="images/watch.jpg"
                alt="product_image"
                className="img-fluid"
              />
              <img
                src="images/tv.jpg"
                alt="product_image"
                className="img-fluid"
              />
            </div>
            <div className="product-details">
              <h6 className="brand">Apple</h6>
              <h5 className="product-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </h5>
              <ReactStars
                count={5}
                size={22}
                activeColor="#ffd700"
                value={3}
                edit={false}
              />
              <p className="price">$100</p>
            </div>
          </Link>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="prodcompare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductCard;
