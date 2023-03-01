import React from "react";

const MainComponent = () => {
  return (
    <div className="main">
      <div className="mainPhoto">
        <img src={require("../pic/activities/1201_10.jpg")} alt="" />
        <div className="shade">
          <p>Music Sharing</p>
        </div>
      </div>
      <div className="mainPhoto">
        <img src={require("../pic/activities/1201_11.jpg")} alt="" />
        <div className="shade">
          <p>Street Painting</p>
        </div>
      </div>
      <div className="mainPhoto">
        <img src={require("../pic/activities/1124_8.jpg")} alt="" />
        <div className="shade">
          <p>Canyoneering</p>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
