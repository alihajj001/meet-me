import "./css/main.css";
import "./css/custom.css";
import "./css/home/home.css";
import React from "react";

import My_img from "./components/left_side/my_img";
import Right_side from "./components/right_side/right_side";

function App() {
  return (
    <>
      <div className="main-container m-B-50 m-T-100">
        <div className="wrapper">
          <div className="col-12 flex-row-no-wrap flex-row-lg align-items-center column-gap-30">
            <div className="col-6 col-12-lg left-section m-B-70-lg">
              <My_img></My_img>
            </div>
            <div className="col-6 col-12-lg right-section">
              <Right_side></Right_side>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
