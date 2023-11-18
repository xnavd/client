import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { service } from "../utils/Data";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src="images/main-banner.jpg"
                alt="main-banner"
                className="img-fluid rounded-3"
              />
              <div className="main-banner-content position-absolute">
                <h4>Suppercharged For Pros</h4>
                <h5>IPad OS13 Pro</h5>
                <p>From $499 - $599</p>
                <Link className="button">By Now</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-01.jpg"
                  alt="main-banner"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Suppercharged For Pros</h4>
                  <h5>IPad OS13 Pro</h5>
                  <p>From $499 - $599</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-01.jpg"
                  alt="main-banner"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Suppercharged For Pros</h4>
                  <h5>IPad OS13 Pro</h5>
                  <p>From $499 - $599</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-01.jpg"
                  alt="main-banner"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Suppercharged For Pros</h4>
                  <h5>IPad OS13 Pro</h5>
                  <p>From $499 - $599</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-01.jpg"
                  alt="main-banner"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Suppercharged For Pros</h4>
                  <h5>IPad OS13 Pro</h5>
                  <p>From $499 - $599</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-warpper-2 py-5">
        <section className="home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="service d-flex align-items-center justify-content-between">
                  {service?.map((i, j) => {
                    return (
                      <div className="d-flex align-items-center gap-15" key={j}>
                        <img src={i.image} alt="" />
                        <div>
                          <h6>{i.title}</h6>
                          <p className="mb-0">{i.tagline}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-between align-items-center">
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Camera</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Camera</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Camera</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Camera</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Camera</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Camera</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Camera</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Camera</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Feature Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card bg-dark position-relative">
              <img src="images/watch.jpg" alt="" className="img-fluid" />
              <div className="famous-content position-absolute">
                <h5>BIG SCREEN</h5>
                <h6>Smart Wacth Series 7</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card bg-dark position-relative">
              <img src="images/watch.jpg" alt="" className="img-fluid" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">BIG SCREEN</h5>
                <h6 className="text-dark">Smart Wacth Series 7</h6>
                <p className="text-dark">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card bg-dark position-relative">
              <img src="images/watch.jpg" alt="" className="img-fluid" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">BIG SCREEN</h5>
                <h6 className="text-dark">Smart Wacth Series 7</h6>
                <p className="text-dark">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card bg-dark position-relative">
              <img src="images/watch.jpg" alt="" className="img-fluid" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">BIG SCREEN</h5>
                <h6 className="text-dark">Smart Wacth Series 7</h6>
                <p className="text-dark">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Product</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="marquee-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest BLogs</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
