import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

export default function ModalDelete({ closeModal, modalIsOpen, id }) {
    const dispatch = useDispatch()
    Modal.setAppElement('#root')
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        }
    
    }
    const handleDeleteContact = (id) => {
        dispatch(deleteContact(id))
    }
    return <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Delete contact Modal"
      >
        <button onClick={closeModal}>close</button>
        <h4>Delete the contact?</h4>
        <button onClick={() => handleDeleteContact(id)}>Yes</button>
        <button onClick={closeModal}>No</button>
      </Modal>
}