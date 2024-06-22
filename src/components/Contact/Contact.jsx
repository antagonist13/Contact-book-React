import css from './Contact.module.css'
import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { useState } from 'react';
import ModalDelete from '../ModalDelete/ModalDelete';
import ModalEdit from '../ModalEdit/ModalEdit';

export default function Contact({ contacts: { name, id, number } }) {

    const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  function openEditModal() {
    setEditModalIsOpen(true);
  }
  function closeEditModal() {
    setEditModalIsOpen(false);
  }

  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  function openDeleteModal() {
    setDeleteModalIsOpen(true);
  }
  function closeDeleteModal() {
    setDeleteModalIsOpen(false);
  }
    return <>
        <div>
            <p className={css.text}>{<IoPerson className={css.icon} />} {name}</p>
            <p className={css.text}>{<FaPhoneAlt className={css.icon} />} {number}</p>
      </div>
        <button onClick={() => openEditModal()} className={css.removeButton}>
          Edit
        </button>
        <button onClick={() => openDeleteModal()} className={css.removeButton}>
          Delete
      </button>
      <ModalEdit closeModal={closeEditModal} modalIsOpen={editModalIsOpen} id={id} />
      <ModalDelete closeModal={closeDeleteModal} modalIsOpen={deleteModalIsOpen} id={id} />
    </>
  }
