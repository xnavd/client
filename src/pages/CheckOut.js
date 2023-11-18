import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { IoArrowBack } from "react-icons/io5";
import watch from "../images/watch.jpg";
import Container from "../components/Container";
const CheckOut = () => {
  return (
    <>
      {/* <Meta title={"Cart"} />
      <BreadCrumb title="Cart" /> */}
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Dev Conner</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/cart" className="test-dark total-price">
                      Cart
                    </Link>
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item active" aria-current="page">
                    Information
                  </li>
                  &nbsp; /<li className="breadcrumb-item active">Shipping</li>
                  &nbsp; /
                  <li className="breadcrumb-item active" aria-current="page">
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Contact Information</h4>
              <p className="user-details total">thanhnd (thanh@gmail.com)</p>
              <h4 className="mb-3">Shipping Address</h4>
              <form
                className="flex-wrap d-flex gap-15 justify-content-between"
                action=""
              >
                <div className="w-100">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disable>
                      Select Country
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    className="form-control"
                    placeholder="Firt name"
                    type="text"
                  ></input>
                </div>
                <div className="flex-grow-1">
                  <input
                    className="form-control"
                    placeholder="Last Name"
                    type="text"
                  ></input>
                </div>
                <div className="w-100">
                  <input
                    className="form-control"
                    placeholder="Address"
                    type="text"
                  ></input>
                </div>
                <div className="w-100">
                  <input
                    className="form-control"
                    placeholder="Apartment, Sui, etc"
                    type="text"
                  ></input>
                </div>
                <div className="flex-grow-1">
                  <input
                    className="form-control"
                    placeholder="City"
                    type="text"
                  ></input>
                </div>
                <div className="flex-grow-1">
                  <select name="" className="form-control form-select" id="">
                    <option value selected disabled>
                      Select State
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    className="form-control"
                    placeholder="Zip code"
                    type="text"
                  ></input>
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark me-2">
                      <IoArrowBack /> Return to cart
                    </Link>
                    <Link to="/product" className="button">
                      Countinue to Shopping
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex gap-10 mb-2 align-items-center border-bottom py-4 mb-2">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{
                        top: "-10px",
                        right: "2px",
                      }}
                      className="badge bg-secondary text-white rounded-circle p-1 position-absolute"
                    >
                      1
                    </span>
                    <img
                      className="img-fluid"
                      src={watch}
                      alt="product image"
                    ></img>
                  </div>
                  <div>
                    <h5 className="title total-price">dsadsadas</h5>
                    <p className="total-price">s / dsadas</p>
                  </div>
                </div>
                <div className="flex-ground-1">
                  <h5 className="total">$ 100</h5>
                </div>
              </div>
              <div className="py-4">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="total">SubToTal</p>
                  <p className="total">$ 1000</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total-price">$ 1000</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">$ 1000</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CheckOut;
