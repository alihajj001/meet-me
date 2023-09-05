import React from "react";

const Right_box = ({ title, contentComponent }) => {
  return (
    <div className="right-box">
      <h1>{title}</h1>
      <hr></hr>
      {contentComponent}
    </div>
  );
};

export default Right_box;
