import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" alt="" className="img-fluid w-100" />
        </div>
        <div className="blog-content">
          <p className="date">13 Nov, 2023</p>
          <h5 className="title">Lorem, ipsum dolor sit amet</h5>
          <p className="desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa cum
            veniam accusamus eius facilis! Eveniet distinctio expedita totam
            tempora, repudiandae excepturi, minima voluptates officiis
            temporibus odit officia aliquid quae quas.
          </p>
          <Link to="/" className="button" e>
            Read more
          </Link>
        </div>
      </div>
  );
};

export default BlogCard;
