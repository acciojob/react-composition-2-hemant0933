import React,{useEffect} from 'react';

const Modal = ({ show, onClose}) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.classList.contains('modal-overlay')) {
        onClose();
      }
    };
  if (show) {
      window.addEventListener('click', handleOutsideClick);
    }
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="modal-overlay">
        <button className="modal-close showModal" onClick={onClose}>
          Close
        </button>
        <p>This is the content of the modal.</p>
    </div>
  );
};

export default Modal;
