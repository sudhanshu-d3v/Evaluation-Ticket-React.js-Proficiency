import React from "react";
import "./Sort.css";

const Sort = ({ handleSortByName}) => {
    return <div>
        <button className="sort-i" onClick={()=>handleSortByName()}>Sort List by Name</button>
  </div>;
};

export default Sort;
