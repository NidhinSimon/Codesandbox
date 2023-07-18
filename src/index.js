import React from "react";
import ReactDOM from "react-dom";

const name = "Nidhin";
const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDOM.render(
  <>
    <h1>This is Created by {name}</h1> <p>Copyright Year - {year} </p>
  </>,
  document.getElementById("root")
);
