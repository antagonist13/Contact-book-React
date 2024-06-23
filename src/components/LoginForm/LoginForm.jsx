import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import toast, { Toaster } from 'react-hot-toast';

export default function LoginForm() {
  const dispatch = useDispatch();
  const loginSuccessNotify = () => toast.success('You have successfully logged in ');
  const loginErrorNotify = () => toast.error('Something went wrong, try again');

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values)).unwrap()
            .then(() => {
            loginSuccessNotify();
            })
            .catch(() => {
            loginErrorNotify();
            });

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit" className={css.submitBtn}>Log In</button>
        <Toaster position="top-left" reverseOrder={false} />
      </Form>
    </Formik>
  );
}