import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
    const searchFieldId = useId();
    const filter = useSelector(selectNameFilter);
    const dispatch = useDispatch();

    return (
        <div className={css.searchBox}>
            <label htmlFor={searchFieldId}>Find contacts by name</label>
            <input
                className={css.searchBoxInput}
                id={searchFieldId}
                type="text"
                value={filter}
                onChange={event => dispatch(changeFilter(event.target.value))}
            />
        </div>
    );
};

export default SearchBox;