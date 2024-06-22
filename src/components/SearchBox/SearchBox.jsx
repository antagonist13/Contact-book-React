import css from './SearchBox.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilterByName, changeFilterByNumber } from '../../redux/filters/slice'
import { selectNameFilter, selectNumberFilter } from '../../redux/filters/selectors'

export default function SearchBox() {

  const dispatch = useDispatch()
  const searchValueByName = useSelector(selectNameFilter)
  const searchValueByNumber = useSelector(selectNumberFilter)
  const handleSearchByName = (searchData) => {
    dispatch(changeFilterByName(searchData))
  }
  const handleSearchByNumber = (searchData) => {
    dispatch(changeFilterByNumber(searchData))
  }
  return<>
  <div className={css.searchingBlock}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={searchValueByName}
        onChange={(e) => handleSearchByName(e.target.value)}
        className={css.searchInput}
      />
    </div>
      <div className={css.searchingBlock}>
      <p>Find contacts by number</p>
      <input
        type="text"
        value={searchValueByNumber}
        onChange={(e) => handleSearchByNumber(e.target.value)}
        className={css.searchInput}
      />
    </div>
    </>
}
