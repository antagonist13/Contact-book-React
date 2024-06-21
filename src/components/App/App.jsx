import css from './App.module.css'
import { useDispatch} from 'react-redux'
import { useEffect, lazy } from 'react';
import { fetchContacts } from '../../redux/contacts/contactsOps';
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"))


export default function App() {
    
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return <div className={css.container}>
  <ContactsPage />
</div>
}