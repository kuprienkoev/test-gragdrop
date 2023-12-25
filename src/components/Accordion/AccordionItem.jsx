import React, { useRef } from 'react';

const AccordionItem = ({ faqItem, onClick, isOpen, id }) => {
  const itemRef = useRef(null);
  return (
    <li className="accordion-item" key={id}>
      <button className="accordion-header" onClick={() => onClick()}>
        {faqItem.q}
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
