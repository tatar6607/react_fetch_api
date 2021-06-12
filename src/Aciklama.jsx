import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const Aciklama = () => {
  const [isDisplay, setDisplay] = useState(true);

  function displayOnClick() {
    setDisplay(!isDisplay);
    // console.log(isDisplay);
  }

  const acikalama = (
    <div>
      <div
        className="h4 d-flex justify-content-end me-4"
        style={{ position: "relative", top: "47px" }}
      >
        <FontAwesomeIcon icon={faWindowClose} onClick={displayOnClick} />
      </div>

      <div className="lead bg-warning shadow-lg p-3 mb-3 ">
        <div className="text-danger fw-bold">Aciklama</div>
        <ul>
          <li>
            Api den datalar fetch() methodu ile indirilip .map() ile Card
            componenti uzerinden render edilmistir
          </li>
          <li>
            Takip et butonuna tikladiginizda takip edilen kisi sayisi badge
            olarak sag ustte goruntulenebilir. Shortcut kullanildi.
          </li>
          <li>
            Sil butonu istenilen karti siler. Bir onClick eventina birden cok
            fonksiyon gonderimi yapildi
          </li>
          <li>
            Bu aciklamayi kapatmak icin aciklama bolumunun sag ustunde bulunan x
            butonuna tiklayiniz. (useState - shortcut kullanildi)
          </li>
        </ul>
      </div>
    </div>
  );

  return <div> {isDisplay && acikalama} </div>;
};

export default Aciklama;
