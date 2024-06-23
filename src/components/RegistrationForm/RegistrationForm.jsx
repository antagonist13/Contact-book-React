import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
import toast, { Toaster } from 'react-hot-toast';

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const regSuccessNotify = () => toast.success('You have successfully logged in');
  const regErrorNotify = () => toast.error('Something went wrong, try again');

  const handleSubmit = (values, actions) => {
    dispatch(register(values)).unwrap()
            .then(() => {
            regSuccessNotify();
            })
            .catch(() => {
            regErrorNotify();
            });

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit" className={css.submitBtn}>Register</button>
        <Toaster position="top-left" reverseOrder={false} />
      </Form>
    </Formik>
  );
}