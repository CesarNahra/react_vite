import MenuComponent from '../MenuComponent/MenuComponent';
import './HeaderComponent.css';

export const HeaderComponent = () => {
    return(
        <nav className='menu-principal-wrapper'>
            <div className="logo-wrapper">
                <h1>Logo da minha empresa</h1>
            </div>
            <MenuComponent/>
        </nav>
    );
};