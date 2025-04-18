import React, { useState } from "react";

const Korisnik = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="text-center mt-5">
        <img
          id="mojaSlika"
          src="Luka2.jpg"
          alt="Moja slika"
          style={{ width: "200px", cursor: "pointer", borderRadius: "10px" }}
          onClick={() => setModalOpen(true)}
        />
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src="Luka2.jpg" alt="Moja slika ponovno" style={{ width: "150px", borderRadius: "10px" }} />
            <ul style={{ listStyleType: "none", padding: 0, marginTop: "10px" }}>
              <li><strong>📅 Datum rođenja:</strong> 03.12.2001.</li>
              <li><strong>🎯 Hobi:</strong> trčanje, programiranje</li>
              <li><strong>🏛️ Fakultet:</strong> FERIT, Osijek</li>
              <li><strong>📘 Smjer:</strong> Stručni studij računarstvo</li>
              <li><strong>✉️ Email:</strong> lbilandzic@etfos.hr</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Korisnik;
