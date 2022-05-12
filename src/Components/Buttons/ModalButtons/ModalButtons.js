import React from "react";
import "./ModalButtons.css";

const DownloadButton = ({ icon, onClickFunc }) => {
  return (
    <div className="download-btn" onClick={() => onClickFunc()}>
      {icon}
    </div>
  );
};

const ModalButtons = ({ icon, text, onClickFunction, color }) => {
  return (
    <button
      className="modal-btn-wrapper"
      onClick={() => onClickFunction()}
      style={{ backgroundColor: color }}
    >
      <p>
        {icon} &nbsp; {text}
      </p>
    </button>
  );
};

export { ModalButtons, DownloadButton };
