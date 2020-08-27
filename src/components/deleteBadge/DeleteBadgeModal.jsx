import React from 'react';
import Modal from '../modal/Modal';

export default function deleteBadgeModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className='DeleteBashModal'>
        <h2>Are you sure</h2>
        <p>You are sure to delete this badge</p>
      </div>
      <div className=''>
        <button onClick={props.onDeleteBadge} className='btn btn-danger mr-4'>
          Delete
        </button>
        <button onClick={props.onClose} className='btn btn-primary mr-4'>
          Cancel
        </button>
      </div>
    </Modal>
  );
}
