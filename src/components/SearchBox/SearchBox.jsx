import css from "./SearchBox.module.css";
import { useId } from "react";

const SearchBox = ({ value, onFilter }) => {
    const searchFieldId = useId();

    return (
        <div className={css.searchBox}>
            <label htmlFor={searchFieldId}>Find contacts by name</label>
            <input
                className={css.searchBoxInput}
                id={searchFieldId}
                type="text"
                value={value}
                onChange={(event) => onFilter(event.target.value)}
            />
        </div>
    );
};

export default SearchBox;