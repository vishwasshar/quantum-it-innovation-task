import React from "react";
import herobg from "../Images/herobg.jpg";
import heroImg from "../Images/hero-img.png";
import img2 from "../Images/img2.png";
import { AiFillSetting } from "react-icons/ai";
import ServiceCard from "../Components/ServiceCard";

const Home = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.2), rgba(255,255,255,0.9)), url(${herobg})`,
          minHeight: "90vh",
          padding: "5% 5% 0",
        }}
      >
        <div
          className="container-fluid hstack gap-3 flex-wrap"
          style={{ height: "100%" }}
        >
          <div className="col-12 col-sm-4 col-md-5 text-center text-sm-start">
            <h5>Ki Name Dhake Bolbo Tomake</h5>
            <h2>We are Consulting For Your Business Finances</h2>
            <p>
              We are Consulting For Your Business FinancesWe are Consulting For
              Your Business FinancesWe are Consulting For Your Business Finances
            </p>
            <a className="btn btn-primary" href="#" role="button">
              Start Now
            </a>
          </div>
          <img
            className=" ms-auto col-12 col-sm-7 col-md-6 align-self-end"
            src={heroImg}
            style={{ height: "80%", maxHeight: "550px" }}
          />
        </div>
      </section>
      <section
        className="container d-flex flex-column justify-content-evenly gap-5"
        style={{ minHeight: "100vh", padding: "5%" }}
      >
        <div className="row container-fluid gap-3 ">
          <div className="col-12 col-md-5 text-center text-sm-start">
            <h3>We Have Many Year Experience In Consuntent Business</h3>
            <p>
              We are Consulting For Your Business FinancesWe are Consulting For
              Your Business FinancesWe are Consulting For Your Business Finances
            </p>
            <a className="btn btn-primary" href="#" role="button">
              Know More
            </a>
          </div>
          <div className="ms-auto  d-flex justify-content-center col-12 col-md-5 position-relative">
            <img src={img2} className="col-12 mx-auto" />
          </div>
        </div>
        <div className=" row d-flex justify-content-evenly">
          {Array(4)
            .fill(null)
            .map((a, i) => (
              <div
                key={i}
                className="d-flex flex-column align-items-center justify-content-center col-6 col-sm-2"
              >
                <AiFillSetting size={30} />
                <h5>Dummy Logo</h5>
              </div>
            ))}
        </div>
      </section>
      <section
        style={{
          backgroundColor: "#b0e7f755",
          minHeight: "100vh",
          padding: "5%",
        }}
        className=" d-flex justify-content-center align-items-center"
      >
        <div className="container d-flex flex-column justify-content-center align-items-center gap-5">
          <div className="col-sm-5 d-flex flex-column justify-content-center align-items-center ">
            <h3>Our Services</h3>
            <p className="text-center">
              We are Consulting For Your Business FinancesWe are Consulting For
              Your Business FinancesWe are Consulting For Your Business Finances
            </p>
          </div>
          <div className="col-12 d-flex justify-content-between flex-wrap gap-5">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
          <a className="btn btn-primary" href="#" role="button">
            All Services
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
