import React from "react";
import { AiOutlineNotification } from "react-icons/ai";

const ServiceCard = () => {
  return (
    <div
      className="col-4 card text-center mx-auto "
      style={{ width: "18rem" }}
    >
      <div className="card-body position-relative d-flex flex-column align-items-center">
        <div
          className="position-relative border bg-light rounded-circle d-flex align-items-center justify-content-center"
          style={{ top: "-25%", height: "50px", width: "50px" }}
        >
          <AiOutlineNotification size={30} />
        </div>
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
