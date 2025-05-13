
import { FaSearch } from "react-icons/fa";
import styles from "./SearchBox.module.css";

const SearchBox = ({search,searchHandler}) => {
    const changeHandler=(event)=>{
        searchHandler(event)
    }
    return (
        <div className={styles.searchBox}>
            <input type="text" value={search} placeholder="search.." onChange={changeHandler} />
            <button><FaSearch color="#fff" fontSize="1rem" /></button>
        </div>
    );
}

export default SearchBox;
