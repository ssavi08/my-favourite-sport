import React from "react";


const Nogomet = () => {
  return (
    <section className="nogomet-glavni">
      <h2><strong>Nogomet</strong></h2>
      <p><strong>Nogomet je više od sporta – to je strast, zajedništvo i globalna povezanost među ljudima svih uzrasta.</strong></p>

      <div className="nogomet-detalji">
        <h3><strong>Više o nogometu</strong></h3>
        <ul>
          <li>⚽<strong> Osnovna informacija </strong>
            <ul>
              <li>Nogomet je timska igra između dvije ekipe po 11 igrača.</li>
              <li>Igra se loptom, a cilj je postići više golova od protivnika.</li>
              <li>Postoje ligaški i kup sustavi.</li> 
              <li>Ligaški sustav je jedna skupina od nekoliko momčadi, koje igraju međusobno</li>
              <li>Kup sustav je nokaut faza, gdje klubovi ig...</li>
            </ul>
          </li>
          <li>📜 <strong>Pravila nogometa </strong>
            <ul>
              <li>Dvije ekipe po 11 igrača, uključujući golmana.</li>
              <li>Ne smije se igrati rukom osim golmanu u svom prostoru.</li>
              <li>Igra traje 2 × 45 minuta s odmorom između.</li>
              <li>Postoje pravila poput zaleđa, žutih i crvenih kartona.</li>
            </ul>
          </li>
          <li>🏆 <strong>Natjecanja </strong>
            <ul>
              <li>FIFA Svjetsko prvenstvo, UEFA Europsko prvenstvo, Copa America...</li>
              <li>UEFA Liga prvaka, UEFA Europska liga, Copa Libertadores...</li>
              <li>Nacionalne lige: Premier League, La Liga, Serie A, Bundesliga...</li>
            </ul>
          </li>
          <li>🌟 <strong>Najpoznatiji igrači </strong>
            <ul>
              <li>Strani: Messi, Ronaldo, Mbappe, Haaland...</li>
              <li>Domaći: Modrić, Pašalić, Gvardiol, Livaković...</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="text-center mt-3">
        <button className="btn btn-warning" onClick={() => window.open("https://www.fifa.com/", "_blank")}>Informacije o nogometu</button>
        <button className="btn btn-warning" onClick={() => window.open("nogomet1.jpg", "_blank")}>Slika 1</button>
        <button className="btn btn-warning" onClick={() => window.open("nogomet2.gif", "_blank")}>Slika 2</button>
      </div>
    </section>
  );
};

export default Nogomet;
