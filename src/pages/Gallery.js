import React from "react";

// import Title from "./Header/Title";

export default class Gallery extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div class="gallery-page container">
        <h1>PICTURES FROM ALL SHOWS</h1>
        <h2>Click the logo in nav to get back to homepage</h2>
      </div>
    );
  }
}
