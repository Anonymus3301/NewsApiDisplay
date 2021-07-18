import React from "react";
import "../App.scss";
import img from "./cat.jpg";
import toggle1 from "./toggle1.svg";
import { Link } from "react-router-dom";
import toggle2 from "./toggle2.svg";
import { useSelector, useDispatch } from "react-redux";
import { change1, change2 } from "./actions/action";

function Leftbar() {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.changeView);

  const style1 = {
    backgroundColor: "#99ef9c",
    boxShadow: "inset 0 0 10px grey",
  };
  const style2 = {
    boxShadow: "inset 0 0 10px grey",
  };
  return (
    <div className="left-bar">
      <div className="intro">
        <div className="image">
          <img id="cat" src={img} alt="logo"></img>
        </div>
        <div className="reader">
          <span style={{ fontWeight: "bold" }}>Hi Reader,</span>
          <br></br>
          Here's your news
        </div>
      </div>
      <div className="toggle">
        <Link to="/">
          <div
            style={myState === "/" ? style1 : style2}
            onClick={() => {
              dispatch(change1());
            }}
            className="view1"
          >
            <img src={toggle1} alt=""></img>
          </div>
        </Link>
        <Link to="/view2">
          <div
            style={myState === "/view2" ? style1 : style2}
            onClick={() => {
              dispatch(change2());
            }}
            className="view2"
          >
            <img src={toggle2} alt=""></img>
          </div>
        </Link>
      </div>
      <div className="feedback">
        <div className="ques">Have a Feedback?</div>
        <div className="feed_input">
          <input></input>
        </div>
      </div>
    </div>
  );
}

export default Leftbar;
