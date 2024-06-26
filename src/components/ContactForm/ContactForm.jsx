import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from './ContactForm.module.css'
import { useDispatch } from 'react-redux'
import { addContact } from "../../redux/contacts/operations";
import toast, { Toaster } from 'react-hot-toast';

export default function ContactForm() {
    const dispatch = useDispatch()
    const newContactSuccessNotify = () => toast.success('New contact has been added!');
    const newContactErrorNotify = () => toast.error('An error occurred, try again!');

    const fieldId = useId();
    const handleSubmit = (values, actions) => {
        dispatch(addContact(values)).unwrap()
            .then(() => {
            newContactSuccessNotify();
            })
            .catch(() => {
            newContactErrorNotify();
            });
        actions.resetForm();
        
    };
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
    
    return <Formik
            initialValues={{
            name: "",
            number: "",
            }}
            validationSchema={UserSchema}
            onSubmit={handleSubmit}
            >
        <Form className={css.form}>
            <div className={css.formItem}>
                <label htmlFor={`${fieldId}-name`}>Name</label>
                <Field className={css.input}
                    type="text"
                    name="name"
                    id={`${fieldId}-name`}
                />
                <ErrorMessage
                    name="name"
                    component="span"
                    className={css.error}
                />
            </div>
             <div className={css.formItem}>
                <label htmlFor={`${fieldId}-number`}>Number</label>
                <Field className={css.input}
                    type="text"
                    name="number"
                    id={`${fieldId}-number`}
                />
                <ErrorMessage
                    name="number"
                    component="span"
                    className={css.error}
                />
            </div>
            <button type="submit" className={css.submitBtn}> Add Contact </button>
            <Toaster position="top-left" reverseOrder={false} />
        </Form>
    </Formik>
    
    
}
