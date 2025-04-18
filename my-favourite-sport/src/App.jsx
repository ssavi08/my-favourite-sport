import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nogomet from "./components/Nogomet";
import Vaterpolo from "./components/Vaterpolo";
import Korisnik from "./components/Korisnik";

function App() {
  return (
    <div>
      <Header />
      <Nogomet />
      <div className="razmak-izmedu"><h1><strong>Drugi izbor</strong></h1></div>
      <Vaterpolo />
      <div className="razmak-izmedu2"><h1><strong>Korisnici</strong></h1></div>
      <Korisnik />
      <Footer />
    </div>
  );
}

export default App;
