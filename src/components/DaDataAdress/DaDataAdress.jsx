import React, { useState } from 'react';
import axios from 'axios';
import './DaDataAdress.css';
const DaDataAdress = () => {
  const [adress, setAdress] = useState('Введите адрес');

  const getAdress = () => {
    var url = 'https://cleaner.dadata.ru/api/v1/clean/address';
    var token = '627f5b9af9e6199c12b5f59da5459134923e406b';
    var secret = '45f30d77f5b50c407bf95129f493a7932033fbfe';
    var query = 'мск сухонска 11/-89';

    var options = {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json, text/javascript, */*; q=0.01',
        'Content-Type': 'application/json',
        Authorization: 'Token ' + token,
        'X-Secret': secret,
      },
      body: JSON.stringify([query]),
    };

    fetch(url, options)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
    /* const response = axios.post(
      'https://kirov.asu.big3.ru/extapi/v2/contract-position/',
      options
    ); */
  };

  return (
    <section className="container">
      <h3>Разложить адрес по полям</h3>
      <div className="row">
        <input
          type="text"
          value={adress}
          onChange={(event) => setAdress(event.target.value)}
        />
        <button onClick={getAdress}>Отправить</button>
      </div>
      {/* <div className="row">
        <div className="label">
          <label for="postal_code">Индекс</label>
        </div>
        <div className="value">
          <input type="text" id="postal_code" />
        </div>
      </div>
      <div className="row">
        <div className="label">
          <label for="region">Регион</label>
        </div>
        <div className="value">
          <input type="text" id="region" />
        </div>
      </div>
      <div className="row">
        <div className="label">
          <label for="city">Город</label>
        </div>
        <div className="value ">
          <input type="text" id="city" />
        </div>
      </div>
      <div className="row">
        <div className="label">
          <label for="street">Улица</label>
        </div>
        <div className="value">
          <input type="text" id="street" />
        </div>
      </div>
      <div className="row">
        <div className="label">
          <label for="house">Дом</label>
        </div>
        <div className="value">
          <input type="text" id="house" />
        </div>
      </div>
      <div className="row">
        <div className="label">
          <label for="flat">Квартира</label>
        </div>
        <div className="value">
          <input type="text" id="flat" />
        </div>
      </div>
      <div className="row">
        <div className="label">
          <label for="flat">Геокоорд.</label>
        </div>
        <div className="value">
          <span id="geo"></span>
        </div>
      </div> */}
    </section>
  );
};

export default DaDataAdress;
