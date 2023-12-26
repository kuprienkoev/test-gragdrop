import React, { useRef } from 'react';
import { BsChevronDown } from 'react-icons/bs';

const AccordionItem = ({ faqItem, onClick, isOpen, id }) => {
  const itemRef = useRef(null);
  return (
    <li className="accordion-item" key={id}>
      <button className="accordion-header" onClick={() => onClick()}>
        {faqItem.q}
        <BsChevronDown className={`qweshenIcom ${isOpen ? 'active' : ''}`} />
      </button>

      <div
        className="accordion-collaps"
        style={
          isOpen ? { height: itemRef.current.scrollHeight } : { height: '0px' }
        }
      >
        <div className="accordion-body" ref={itemRef}>
          {faqItem.a}
        </div>
      </div>
    </li>
  );
};

export default AccordionItem;
