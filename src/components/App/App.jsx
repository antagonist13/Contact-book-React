import css from './App.module.css'
import { useDispatch} from 'react-redux'
import { useEffect, lazy } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';

const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"))
const RegisterPage = lazy(() => import("../../pages/RegisterPage/RegisterPage"))
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"))
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"))


export default function App() {
    
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return <div className={css.container}>
    <HomePage />
    <ContactsPage />
    <RegisterPage />
    <LoginPage />
</div>
}