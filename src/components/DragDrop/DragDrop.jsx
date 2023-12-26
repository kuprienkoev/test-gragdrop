import React, { useState } from 'react';
import './DragDrop.css';
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

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFiles([...e.dataTransfer.files]);
    }
  };
  const handleReset = () => {
    setFiles([]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    files.forEach((file) => {
      data.append('file', file);
    });
    fetch('https//someapi', { method: 'Post', body: data })
      .then((resp) => resp.json())
      .then(() => setFiles([]))
      .then(() => setFiles([]));
  };
  return (
    <div className="wrapper">
      <h1 className="h1">Drag & Drop</h1>
      <form
        className={`form  ${dragActive ? 'drag' : ''}`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleLeave}
        onDrop={handleDrop}
        onReset={handleReset}
        onSubmit={handleSubmit}
      >
        <h2 className="h2">Перетащите файлы сюда</h2>
        <p>или</p>
        <label className="label">
          <span>Загрузите файлы</span>
          <input
            type="file"
            className="input"
            multiple={true}
            onChange={handleChange}
          />
        </label>
        {files.length > 0 && (
          <>
            <ul className="file__list">
              {files.map(({ name }, id) => (
                <li key={id}>{name}</li>
              ))}
            </ul>

            <button className="button-reset" type="reset">
              Отменить
            </button>
            <button className="button-submit" type="submit">
              Отправить
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default DragDrop;
