import ContactForm from '../../components/ContactForm/ContactForm'
import SearchBox from '../../components/SearchBox/SearchBox'
import ContactList from '../../components/ContactList/ContactList'
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import css from './/ContactsPage.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { selectLoading, selectError } from '../../redux/contacts/selectors'
import { fetchContacts } from '../../redux/contacts/operations';
import { useEffect } from 'react';

export default function ContactsPage() {

    const isLoading = useSelector(selectLoading);
    const isError = useSelector(selectError);
    const dispatch = useDispatch();


    useEffect(() => {
    dispatch(fetchContacts())
      }, [dispatch])
    
    
return <div className={css.container}>
    <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
    {isLoading && <Loader>Loading message</Loader>}
    {isError && <Error>Error message</Error>}
        <ContactList/>
</div>
}