import React, { useState } from 'react';
import './Accordion.css';
import AccordionItem from './AccordionItem';
const Accordion = ({ faqList }) => {
  const [openId, setOpenId] = useState(null);

  return (
    <ul className="accordion">
      {faqList.map((faqItem, id) => {
        return (
          <AccordionItem
            faqItem={faqItem}
            onClick={() => (id === openId ? setOpenId(null) : setOpenId(id))}
            isOpen={id === openId}
            key={id}
          />
        );
      })}
    </ul>
  );
};

export default Accordion;
