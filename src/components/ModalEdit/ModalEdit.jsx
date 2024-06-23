import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contacts/operations';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ModalEdit.module.css";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function ModalEdit({closeModal, modalIsOpen, id, updateNotify, errorNotify, contactName, contactNumber}) {
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
  const UserSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Мінімум 3 символи!")
        .max(30, "Максимум 30 символів!")
        .required("Обов'язково заповнити!"),
    number: Yup.string()
        .min(3, "Мінімум 3 символи!")
        .max(30, "Максимум 30 символів!")
        .required("Обов'язково заповнити!"),
  });
  
      const dispatch = useDispatch()
    
    const handleEditContact = (id, updatedData) => {
        dispatch(updateContact({ id, updatedData })).unwrap()
            .then(() => {
            updateNotify();
            })
            .catch(() => {
            errorNotify();
            });
  }
  const handleSubmit = (values, actions) => {
      handleEditContact(id, {
        "name": values.name,
        "number": values.number
      });
      actions.resetForm();
      closeModal()

  };

    return <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Contact editing Modal"
    >
        <div className={css.topModal}>
            <h4 className={css.modalHead}>Edit the contact</h4>
            <IoIosCloseCircleOutline onClick={closeModal} className={css.closeIcon} />
        </div>
      <Formik
            initialValues={{
            name: "",
            number: "",
            }}
            validationSchema={UserSchema}
            onSubmit={handleSubmit}
            >
        <Form className={css.form}>
            <div className={css.formItem}>
                <label htmlFor={`${id}-name`}>Name</label>
                <Field className={css.input}
                    type="text"
                    name="name"
                    id={`${id}-name`}
                    placeholder={contactName}
                />
                <ErrorMessage
                    name="name"
                    component="span"
                    className={css.error}
                />
            </div>
             <div className={css.formItem}>
                <label htmlFor={`${id}-number`}>Number</label>
                <Field className={css.input}
                    type="text"
                    name="number"
                    id={`${id}-number`}
                    placeholder={contactNumber}
                />
                <ErrorMessage
                    name="number"
                    component="span"
                    className={css.error}
                />
            </div>
            <button type="submit" className={css.submitBtn}> Submit </button>
        </Form>
    </Formik>
      </Modal>
}