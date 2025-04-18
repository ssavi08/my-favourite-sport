import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nogomet from "./components/Nogomet";
import Vaterpolo from "./components/Vaterpolo";
import Luka from "./components/Luka";
import Sandro from "./components/Sandro";
import Formula1 from "./components/Formula1";

function App() {
  return (
    <div>
      <Header />
      <Nogomet />
      <div className="razmak-izmedu"><h1><strong>Drugi izbor</strong></h1></div>
      

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "50px",
          padding: "20px"
        }}
      >
        <Vaterpolo />
        <Formula1 />
      </div>

      <div style={{ display: "flex", gap:"100px", justifyContent: "center"}}><Luka /><Sandro /></div>
      <Footer />
    </div>
  );
}

export default App;
