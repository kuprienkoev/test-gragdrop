import React, { useState } from 'react';
import './Accordion.css';
const Accordion = ({ faqList }) => {
  const [openId, setOpenId] = useState(null);
  const clikedQweshen = (id) => {
    if (id === openId) setOpenId(null);
    else setOpenId(id);
  };
  return (
    <ul className="accordion">
      {faqList.map((faqItem, id) => {
        return (
          <li className="accordion-item" key={id}>
            <button
              className="accordion-header"
              onClick={() => clikedQweshen(id)}
            >
              {faqItem.q}
            </button>
            <div
              className={`accordion-collaps   ${id === openId ? 'open' : ''}`}
            >
              <div className="accordion-body">{faqItem.a}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Accordion;
