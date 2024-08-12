import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import FilterMe from "./FilterMy.jsx";
import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle `


*{
  box-sizing:border-box;
  margin:0px;
  padding:0px;
},

body{
  background-color:black;
  color:white;
  min-height:100vh;
}

`
;
//s
let mark = "string of the numner ";
// test cases need to be added here 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Globalstyle />
    <FilterMe />
  </React.StrictMode>
);
