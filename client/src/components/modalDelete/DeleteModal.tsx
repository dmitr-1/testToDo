import './DeleteModal.scss';

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  confirmText?: string;
  cancelText?: string;
}

const DeleteModal = ({ isOpen, onClose, onConfirm, title, confirmText, cancelText }: DeleteModalProps) => {
  if (!isOpen) return null;

  return (
    <div className='modal-overlay' onClick={onClose}>
      <div className='modal-container' onClick={(e) => e.stopPropagation()}>
        <div className='modal-header'>
          <h3 className='modal-title'>{title}</h3>
        </div>
        <div className='modal-footer'>
          <button className='cancel-button' onClick={onClose}>
            {cancelText}
          </button>
          <button className='confirm-button' onClick={onConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
