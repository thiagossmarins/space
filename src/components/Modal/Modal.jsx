import PropTypes from 'prop-types';
import videoespaco from '../../assets/video-modal/videomodal.mp4';
import { useRef } from 'react';
import close from '../../assets/close_FILL0_wght400_GRAD0_opsz24.svg'

const Modal = ({ isOpen, setOpenModal }) => {
    const modalRef = useRef(null);

    const bgStyle = {
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: '1000',
    };

    const modalStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    };

    const fecharVideo = {
        position: 'fixed',
        top: '19%',
        right: '22%',
    }

    const closeModal = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            closeModal();
        }
    };

    const handleBackdropClick = (e) => {
        closeModal(e);
    };

    if (isOpen) {
        return (
            <div style={bgStyle} onClick={handleBackdropClick}>
                <div style={modalStyle} ref={modalRef}>
                    <video autoPlay controls src={videoespaco}></video>
                </div>
                <button style={fecharVideo} className='text-cinza bg-white rounded-50 w-25 h-25 hover:bg-slate-100 duration-150 text-22' onClick={setOpenModal}>
                    <img className='m-auto' src={close} alt="" />
                </button>
            </div>
        );
    }

    return null;
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setOpenModal: PropTypes.func.isRequired
};

export default Modal;