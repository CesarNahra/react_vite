import './SearchComponent.css';

export const SearchComponent = () => {
    return(
        <>
            <div className="search-wrapper">
                <input type="text" name="search" id="search" placeholder='Pesquise alguma coisa'/>
                <button className='search-button' type="button"><i className="bi bi-search"></i></button>
            </div>
        </>
    );
}