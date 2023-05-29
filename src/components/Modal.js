import React from 'react';

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
        <button className="modal-close showModal" onClick={onClose}>
          Close
        </button>
        {children}
    </div>
  );
};

export default Modal;
