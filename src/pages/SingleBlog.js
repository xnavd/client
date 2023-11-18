import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";
const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs">Go Back to Blogs</Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img src="image/blog-1.web" className="img-fluid w-100" alt="blog"></img>
                <p>
                  You’re only as good as your last collection, which is an
                  enormous pressure. I think there is something about luxury –
                  it’s not something people need, but it’s what they want. It
                  really pulls at their heart. I have a fantastic relationship
                  with money.Scelerisque sociosqu ullamcorper urna nisl mollis
                  vestibulum pretium commodo inceptos cum condimentum placerat
                  diam venenatis blandit hac eget dis lacus a parturient a
                  accumsan nisl ante vestibulum.
                </p>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default SingleBlog;
