import React from "react";
import "./ShootingStars.scss";

class ShootingStars extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="night">
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
        <div className="shooting_star"></div>
      </div>
    );
  }
}

export default ShootingStars;
