import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.scss";
import Getdata from "./Getdata";
import Getdata2 from "./GetData2";
import { Switch, Route } from "react-router-dom";

function MainContent() {
  return (
    <div className="newsdata">
      <Switch>
        <Route path="/" exact component={Getdata} />
        <Route path="/view2" exact component={Getdata2} />
      </Switch>
    </div>
  );
}

export default MainContent;
