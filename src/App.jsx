import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nogomet from "./components/Nogomet";
import Vaterpolo from "./components/Vaterpolo";
import Luka from "./components/Luka";
import Sandro from "./components/Sandro";
import Formula1 from "./components/Formula1";
import FootballBanner from "./FootballBanner"
import BavimJa from "./components/BavimJa";
import BavimJa2 from "./components/BavimJa2";
import SvijetskoP from "./components/SvijetskoP";

function App() {
  return (
    <div>
      <Header />
      <FootballBanner />
      <Nogomet />
      <br>
      </br>

      <div id="svjetsko-prvenstvo">
        <SvijetskoP />
      </div>
      <hr style={{ border: '1px solid black', margin: '100px' }} />

      <div id="bavimlise" style={{ display: "flex", textAlign: "center", justifyContent: "center", padding: "20px" }}>
      <h1><strong>Bavim li se ja nogometom?</strong></h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "50px",
          padding: "20px"
        }}
      >
        <BavimJa />
        <BavimJa2 />
      </div>
     
      
      <div id="drugi-sport" className="razmak-izmedu"><hr style={{ border: '1px solid black', margin: '100px' }} /><h1><strong>Drugi izbor</strong></h1></div>
      
      

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
      
      <hr style={{ border: '1px solid black', margin: '100px' }} />
      <div style={{ display: "flex", gap:"100px", justifyContent: "center"}}><Luka /><Sandro /></div>
      <Footer />
    </div>
  );
}

export default App;
