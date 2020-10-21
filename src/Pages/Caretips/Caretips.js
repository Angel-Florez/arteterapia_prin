import React from "react";
import "./Caretips.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Arte from "./Arte/Arte.js";
const Caretips = () => {
  return (
    <div className="Caretips">
      <div class="Tip" id="Arte">
        <img src="./img-caretips/ArteCart (2).png" alt="" />
      </div>
      <div class="Tip" id="Flor">
        <img src="./img-caretips/Flor.png" alt="" />
      </div>
      <div class="Tip" id="Entre">
        <img src="./img-caretips/Entre (2).png" alt="" />
      </div>
      <div class="Tip" id="Musica">
        <img src="./img-caretips/Musica.png" alt="" />
      </div>
      <div class="Tip" id="Rosca">
        <img src="./img-caretips/Rosca.png" alt="" />
      </div>
      <div class="Tip" id="Auto">
        <img src="./img-caretips/Auto.png" alt="" />
      </div>
      <div class="Tip" id="Dinero">
        <img src="./img-caretips/Dinero.png" alt="" />
      </div>
      <div class="Tip" id="Molecula">
        <img src="./img-caretips/Molecula.png" alt="" />
      </div>
      <div class="Tip">
        <img src="./img-caretips/Cerebro.png" alt="" />
      </div>
      <font color="#A" size="20" face="Times new roman">
        <b>CareTips</b>
      </font>
    </div>
  );
};
//<Route exact path="/" component={Arte} />
//<Route path="/CareTips" component={Arte} />
export default Caretips;
