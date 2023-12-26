import React, { useState } from 'react';
import style from './DragDrop.module.css';
const DragDrop = () => {
  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFiles([...e.target.files]);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    setDragActive(true);
  };
  const handleLeave = (e) => {
    e.preventDefault();
    setDragActive(false);
  };

  return (
    <div className={style.wrapper}>
      <h1 className={style.h1}>Drag & Drop</h1>
      <form
        className={`{style.form}  ${dragActive ? 'drag' : ''}`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleLeave}
      >
        <h2 className={style.h2}>Перетащите файлы сюда</h2>
        <p>или</p>
        <label className={style.label}>
          <span>Загрузите файлы</span>
          <input
            type="file"
            className={style.input}
            multiple={true}
            onChange={handleChange}
          />
        </label>
        {files.length > 0 && (
          <ul className={style.file__list}>
            {files.map(({ name }, id) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
};

export default DragDrop;
