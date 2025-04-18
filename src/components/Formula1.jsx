import React, { useState } from "react";
import formula1_1 from "../assets/images/formula1.png";
import formula1_2 from "../assets/images/formula2.gif";

const Formula1 = () => {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <section id="formula1-glavni" className="main-section">
      <h3>Lukin treći izbor:</h3>
      <h1 style={{ cursor: "pointer", display: "inline-block" }} onClick={() => setInfoOpen(true)}>
        Formula 1
      </h1>

      <div className="text-center mt-3">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/E4jnOC0VX3Q"
          title="Formula 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: "10px", maxWidth: "600px" }}
        ></iframe>

        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px", flexWrap: "wrap" }}>
          <a href={formula1_1} target="_blank" rel="noopener noreferrer">
            <img
              src={formula1_1}
              alt="Formula1 1"
              style={{
                width: "300px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
                cursor: "pointer"
              }}
            />
          </a>
          <a href={formula1_2} target="_blank" rel="noopener noreferrer">
            <img
              src={formula1_2}
              alt="Formula1 2"
              style={{
                width: "300px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
                cursor: "pointer"
              }}
            />
          </a>
        </div>
      </div>

      {infoOpen && (
        <div className="modal-overlay" onClick={() => setInfoOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{ textAlign: "left" }}><strong>O Formuli 1</strong></h2>
            <div className="vaterpolo-okvir">
              <h3>🏎️ Osnovne informacije</h3>
              <ul>
                <li>Formula 1 je najviša klasa međunarodnih automobilističkih utrka.</li>
                <li>Organizira ju FIA, a natjecanja se održavaju širom svijeta.</li>
              </ul>
              <h3>📜 Pravila</h3>
              <ul>
                <li>Utrke se održavaju na stazama s više zavoja i ravnica.</li>
                <li>Bodovi se dodjeljuju prvih 10 plasiranih vozača.</li>
              </ul>
              <h3>🏆 Najpoznatija natjecanja</h3>
              <ul>
                <li>Velike nagrade: Monaco, Italija, Belgija, Abu Dhabi</li>
                <li>Svjetsko prvenstvo u vozačima i konstruktorima</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Formula1;
