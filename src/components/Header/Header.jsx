import './Header.css';
import PropTypes from 'prop-types';

const Header = (props) => {


    const renderMenuItem = (menuItem) => {
        return(
            <li key={menuItem.id}><a href={menuItem.path}>{menuItem.label}</a></li>
        );
    }

    const emptyMenu = () => {
        return(
            <p>Nenhum item a ser exibido</p>
        );
    }
    
    return(
        <nav className='menu-principal-wrapper'>
            <div className="logo-wrapper">
                <h1>Minha Empresa</h1>
            </div>
            <ul className="menu-wrapper">
                {props.menu.length > 0 ? props.menu.map(renderMenuItem) : emptyMenu()}
            </ul>
        </nav>
    );
}

Header.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        path: PropTypes.string,
    })),
}

export default Header;