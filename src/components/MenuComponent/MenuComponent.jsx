import { Link } from 'react-router-dom';

const MenuComponent = () => {
    return(
        <>
            <ul className='menu-wrapper'>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/contact'}>Contato</Link></li>
                <li><Link to ={'/faq'}>FAQ</Link></li>
                <li><Link to={'/batata'}>Página não encontrada</Link></li>
            </ul>
        </>
    );
};

export default MenuComponent;