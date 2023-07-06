import { SearchButton, SearchQuery, SearchWrapper } from "./SearchComponent.style";


export const SearchComponent = () => {
    return(
        <>
            <SearchWrapper>
                <SearchQuery placeholder="Digite alguma coisa aqui"/>
                <SearchButton><i className="bi bi-search"></i></SearchButton>
            </SearchWrapper>
        </>
    );
}