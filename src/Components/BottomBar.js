import React from "react";
import toggle1 from "./toggle1.svg";
import toggle2 from "./toggle2.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { change1, change2 } from "./actions/action";

function BottomBar() {
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
    <div className="bottom">
      <Link to="/">
        <span
          style={myState === "/" ? style1 : style2}
          onClick={() => {
            dispatch(change1());
          }}
          className="toggle1"
        >
          <img src={toggle1} alt=""></img>
        </span>
      </Link>
      <Link to="/view2">
        <span
          style={myState === "/view2" ? style1 : style2}
          onClick={() => {
            dispatch(change2());
          }}
          className="toggle2"
        >
          <img src={toggle2} alt=""></img>
        </span>
      </Link>
    </div>
  );
}

export default BottomBar;
