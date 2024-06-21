import ContactForm from '../../components/ContactForm/ContactForm'
import SearchBox from '../../components/SearchBox/SearchBox'
import ContactList from '../../components/ContactList/ContactList'
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import css from './/ContactsPage.module.css'
import { useSelector } from 'react-redux'
import { selectLoading, selectError } from '../../redux/contacts/contactsSelectors'

export default function ContactsPage() {

      const isLoading = useSelector(selectLoading);
    const isError = useSelector(selectError);
    
return <div className={css.container}>
    <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
    {isLoading && <Loader>Loading message</Loader>}
    {isError && <Error>Error message</Error>}
        <ContactList/>
</div>
}