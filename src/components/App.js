import React, { useState } from 'react';
import Modal from './Modal'
import '../styles/App.css'

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal} className='showModal'>Show Modal</button>
      <Modal show={showModal} onClose={handleCloseModal}/>
       
    
    </div>
  );
};

export default App;
