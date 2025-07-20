//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDom from "react-dom/client";

root_div = document.querySelector("#root");
root = ReactDom.createRoot(root_div);

const time = new Date();
const hours = time.getHours();
const hours_int = parseInt(hours);

var message = "";

if (hours_int > 23 && hours_int < 12) {
  message = "Good Morning";
} else if (hours_int >= 12 && hours_int < 18) {
  message = "Good Afternoon";
} else if (hours_int >= 18 && hours_int < 24) {
  message = "Good Afternoon";
}

root.render(<h1>{message}</h1>);
