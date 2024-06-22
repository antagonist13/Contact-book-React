import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contacts/operations';

export default function ModalEdit({closeModal, modalIsOpen, id}) {
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
      const dispatch = useDispatch()
    
    const handleEditContact = (id, updatedData) => {
        dispatch(updateContact({ id, updatedData }))
  }
    const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
      const nameValue = form.elements.name.value;
      const numberValue = form.elements.number.value;
    if (nameValue !== "") {
      handleEditContact(id, {
        "name": String(nameValue),
        "number": String(numberValue)
      });
      form.reset();
      closeModal()
      return;
    }
    alert("Contact name cannot be empty. Enter some text!");
  };

    return <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Contact editing Modal"
      >
        <button onClick={closeModal}>close</button>
      <h4>Edit the contact</h4>
        <form onSubmit={handleSubmit}>
          <input name="name" type='text'/>
          <input name="number" type='text'/>
        <button type="submit">Submit</button>
    </form>
      </Modal>
}