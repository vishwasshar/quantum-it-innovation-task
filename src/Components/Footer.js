import React from "react";
import footerBg from "../Images/footerbg.jpg";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `linear-gradient(rgba(2, 114, 194,0.3), rgba(2, 114, 194,0.3)), url(${footerBg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container py-5">
        <div className="row  hstack gap-3 text-center text-sm-start">
          <div className="col-12 col-sm-5 text-white ">
            <h3>We Have Many Year Experience In Consuntent Business</h3>
            <p>
              We are Consulting For Your Business FinancesWe are Consulting For
              Your Business FinancesWe are Consulting For Your Business Finances
            </p>
          </div>
          <form className="col-10 col-sm-5 form-inline mx-auto ms-sm-auto my-2 my-lg-0">
            <input
              className="form-control my-3"
              type="email"
              placeholder="Enter your Email"
              aria-label="Email"
            />
            <button className="btn btn-primary my-3 my-sm-0" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
