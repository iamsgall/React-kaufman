import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

export default function Modal(props) {
  if (!props.isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className='Modal'>
      <div className='Modal__container'>
        <div onClick={props.onClose} className='Modal__close-button'>
          X
        </div>
        {props.children}
      </div>
    </div>,
    document.querySelector('#modal')
  );
}
