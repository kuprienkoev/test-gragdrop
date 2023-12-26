import React from 'react';
import Accordion from '../Accordion/Accordion';
import DragDrop from '../DragDrop/DragDrop';
import './Main.css';

const Main = () => {
  const faqList = [
    {
      q: 'Вопрос 1',
      a: 'Ответ Ответ Ответ 1',
    },
    {
      q: 'Вопрос 2',
      a: 'Ответ Ответ Ответ 2',
    },
    {
      q: 'Вопрос 3',
      a: 'Ответ Ответ Ответ 3',
    },
    {
      q: 'Вопрос 4',
      a: 'Ответ Ответ Ответ 4',
    },
    {
      q: 'Вопрос 5',
      a: 'Ответ Ответ Ответ 5',
    },
  ];

  return (
    <div className="main">
      <Accordion faqList={faqList} />
      <DragDrop />
    </div>
  );
};
export default Main;
