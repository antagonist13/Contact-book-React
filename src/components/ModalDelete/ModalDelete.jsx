import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import css from "./ModalDelete.module.css"
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function ModalDelete({ closeModal, modalIsOpen, id, deleteSuccessNotify, errorNotify }) {
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
        dispatch(deleteContact(id)).unwrap()
            .then(() => {
            deleteSuccessNotify();
            })
            .catch(() => {
            errorNotify();
            });
    }
    return <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Delete contact Modal"
    >
        <div className={css.topModal}>
            <h4 className={css.modalHead} >Delete the contact?</h4>
            <IoIosCloseCircleOutline onClick={closeModal} className={css.closeIcon} />
        </div>
        <div className={css.form}>
            <button className={css.deleteBtn} onClick={() => handleDeleteContact(id)}>Yes</button>
            <button className={css.deleteBtn} onClick={closeModal}>No</button>
        </div>
      </Modal>
}