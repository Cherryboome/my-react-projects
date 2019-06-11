import React, { Component } from "react";
import "./resources/styles.css";

import Header from "./components/header-footer/Header";

class App extends Component {
  render() {
    return (
      <div style={{ height: "1500px", background: "cornflowerblue" }}>
        <Header />
      </div>
    );
  }
}

export default App;
