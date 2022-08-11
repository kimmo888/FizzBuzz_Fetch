import '../Styles/SearchBox.scss';

const SearchBox = ({ handleChange }) => {

    const onChangeFilter = (e) => {
        handleChange(e.target.value);
    }

    return (
        <div className="filter" >
            <input type="text" onChange={(e)=> onChangeFilter(e)} />
        </div>
    )
}

export default SearchBox;