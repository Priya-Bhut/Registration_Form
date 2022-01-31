import React from "react";
import "../View_Data/View_Data.css";
function View_Data(props) {
  return (
    <div>
      <form id="main">
        <div class="details">
          <h1> USER DETAILS</h1>
        </div>
        <img
          src={URL.createObjectURL(props.field.photo)}
          height={100}
          width={100}
          align="left"
          alt=""
        />
        <h2>
          {props.field.firstName} {props.field.lastName}
        </h2>
        <h2>{props.field.age} year's old</h2>
        <br />
        <h2 align="left">Address: {props.field.address}</h2>
      </form>
    </div>
  );
}
export default View_Data;
