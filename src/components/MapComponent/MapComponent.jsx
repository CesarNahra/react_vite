import './MapComponent.css';

export const MapComponent = () => {
    return(
        <div className="map-wrapper">
            <h2>Venha conhecer a nossa loja <span className="text-yellow">.</span></h2>
            <div className="map-image-wrapper"></div>
            <div className="map-info-wrapper">
                <h3 className="store-wrapper">Matriz</h3>
                <div className="city-location-wrapper">
                    <ul>
                        <li className='street-wrapper'>Rua dos pike</li>
                        <li className='location-wrapper'>Belo Horizonte, Minas Gerais</li>
                    </ul>
                    <div className="contact-container-wrapper">
                        <ul>
                            <li className='phone-wrapper'>+55 8546-9658</li>
                            <li className='email-wrapper'>contato@contato.minhaempresa.com</li>
                        </ul>
                    </div>
                </div>
                <div className="opening-hours-wrapper">
                    <p>Aberto de 10000 a 200000</p>
                </div>
            </div>
        </div>
    );
}