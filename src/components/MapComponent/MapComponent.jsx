import { CityLocationWrapper, MapImageWrapper, MapInfoWrapper, MapWrapper, OpeningHoursWrapper } from './MapComponent.style';

export const MapComponent = () => {
    return(
        <MapWrapper>
            <h2>Venha conhecer a nossa loja <span className="text-yellow">.</span></h2>
            <MapImageWrapper></MapImageWrapper>
            <MapInfoWrapper>
                <h3 className="store-wrapper">Matriz</h3>
                <CityLocationWrapper>
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
                </CityLocationWrapper>
                <OpeningHoursWrapper>
                    <p>Aberto de 10000 a 200000</p>
                </OpeningHoursWrapper>
            </MapInfoWrapper>
        </MapWrapper>
    );
}