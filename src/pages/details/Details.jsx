import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();
  if (!location.state) {
    return <div>No details available</div>;
  }
  const item = location.state; 
  return (
    <div className="product-outer">
      <div className="product-box">
        <div className="detail-name">{item.title}</div>
        <div className="image">
          <img
            src={
              item.images
                ? item.images[0]
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK9sB7SBOR4oNKXvwiGVtfvak3iNByk5IkPnNJWDEuMlKwlwfslXWc6cI4l9aOztwX1vY&usqp=CAU"
            }
            alt=""
          />
        </div>
        <div className="detail">
          <div className="detail-info">
            <b>Info : </b> {item.description}
          </div>
          <div className="detail-info">
            <b>Price : </b> ${item.price ? item.price : "XX"}
          </div>
        </div>
        <div className="detail-btn">
          <button onClick={() => navigate("/")} className="detail-button">
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
