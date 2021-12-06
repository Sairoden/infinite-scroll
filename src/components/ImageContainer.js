import React, { Component } from "react";
import Image from "./Image";


class ImageContainer extends Component {
  render() {
    return (
      <div className="ImageContainer" id="ImageContainer">
        <Image />
        <Image />
        <Image />
      </div>
    );
  }
}

export default ImageContainer;
