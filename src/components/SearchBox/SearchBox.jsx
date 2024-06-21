import css from './SearchBox.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../../redux/contacts/filtersSlice'
import { selectNameFilter } from '../../redux/contacts/contactsSelectors'

export default function SearchBox() {

  const dispatch = useDispatch()
  const searchValue = useSelector(selectNameFilter)
  const handleSearch = (searchData) => {
    dispatch(changeFilter(searchData))
  }
    return <div className={css.searchingBlock}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
        className={css.searchInput}
      />
    </div>
}
