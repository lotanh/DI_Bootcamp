const SearchBox = (props) => {
    const {onInputChange} = props;
    return (
        <div className='pa2'>
            <input type='text' placeholder='Search Robots...' className='pa3 ba bg--green bg-lightest-blue' onChange={onInputChange}></input>
        </div>
    )
}
export default SearchBox;