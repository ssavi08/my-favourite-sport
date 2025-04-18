import React from "react";

const Vaterpolo = () => {
  return (
    <section id="vaterpolo-glavni" className="main-section">
      <h2><strong>Vaterpolo</strong></h2>
      <div className="vaterpolo-okvir">
        <h3>📖 Osnovne informacije</h3>
        <ul>
          <li>Vaterpolo je vodeni sport koji se igra u bazenu između dvije ekipe.</li>
          <li>Cilj igre je postići što više golova.</li>
        </ul>
        <h3>📜 Pravila vaterpola</h3>
        <ul>
          <li>Igra se u četiri četvrtine od po 8 minuta.</li>
          <li>7 igrača po timu: 6 + golman.</li>
          <li>Lopta mora biti iznad vode kod šuta.</li>
        </ul>
        <h3>🏆 Natjecanja</h3>
        <ul>
          <li>Svjetsko, Europsko, Olimpijske igre, LEN Liga prvaka</li>
        </ul>
      </div>

      <div className="text-center mt-3">
        <button className="btn btn-primary" onClick={() => window.open("https://www.youtube.com/watch?v=vwiMWetj5hk", "_blank")}>Pogledaj video o vaterpolu</button>
        <button className="btn btn-primary" onClick={() => window.open("vaterpolo1.jpg", "_blank")}>Slika 1</button>
        <button className="btn btn-primary" onClick={() => window.open("vaterpolo2.gif", "_blank")}>Slika 2</button>
      </div>
    </section>
  );
};

export default Vaterpolo;
