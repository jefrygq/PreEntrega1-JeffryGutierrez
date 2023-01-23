const SearchWidget = () => {
    return (
        <form className="d-flex me-lg-3" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
    );
}

export default SearchWidget;