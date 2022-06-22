import "./App.css";
import React from "react";
import Menu from "./shared/Menu";
import MyInfo from "./component/MyInfo";
import Presentation from "./component/Presentation";
import Experience from "../src/component/Experience";
import Formation from "./component/Formation";
import Connaisance from "../src/component/Connaisance";
import Footer from "../src/shared/Footer";

function ColMd({ value, colmd }) {
  return <div className={colmd}>{value}</div>;
}
function App() {
  return (
    <div>
      <Menu />
      <MyInfo />
      <div className="container">
        <div className="row">
          <ColMd value={<Presentation />} colmd="col-md-4" />
          <ColMd value={<Formation />} colmd="col-md-8" />
        </div>
        <Experience />
        <Connaisance />
      </div>
      <Footer />
    </div>
  );
}

export default App;
