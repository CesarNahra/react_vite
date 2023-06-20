import { useState, useEffect } from 'react';
import './Header.css';
import PropTypes from 'prop-types';

const Header = (props) => {

    const logoDefault = 'Logo Default';

    const [logo, setLogo] = useState(logoDefault);

    useEffect(() => {
        setTimeout(() => {
            window.document.title = logo;
        }, 2000);
    }, [logo])


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

    const handleButton = () => {
        // if(logo === logoDefault) {
        //     setLogo(Maça);
        // } else {
        //     setLogo(logoDefault);
        // }

        const value = logo === logoDefault ? 'Maça' : logoDefault;
        setLogo(value);
    }
    
    return(
        <nav className='menu-principal-wrapper'>
            <div className="logo-wrapper">
                <h1>{logo}</h1>
                <button onClick={handleButton}>Trocar nome da logo</button>
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