import React, { Component } from "react";
import API_KEY from "../api.js";

class Image extends Component {
  count = 10;
  _apiUrl = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=${this.count}`;

  async getPhotos() {
    try {
      const res = await fetch(this._apiUrl);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error("Oops something went wrong! 😢😢", err.message);
    }
  }

  componentDidMount() {
    this.getPhotos();
  }

  render() {
    return (
      <img
        src="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt=""
      />
    );
  }
}

export default Image;
