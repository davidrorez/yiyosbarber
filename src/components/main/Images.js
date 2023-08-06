import React from "react";

function ImgBarber(props) {
  return (
    <div className="col-md-6 mt-3">
      <img
        src={props.imgBarber}
        className="img-fluid"
        alt="Imagen"
        style={{
          filter: "brightness(75%)",
          transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out"
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
        }}
      />
    </div>
  );
}

export default ImgBarber;
