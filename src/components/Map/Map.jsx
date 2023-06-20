import './Map.css';

function Map() {
    return (
        <div className="map-wrapper">
            <div className="map-image-wrapper"></div>
            <div className="map-info-wrapper">
                <h3 className="store-wrapper">Matriz</h3>
                <p className="street-wrapper">Rua Afonso Pena, 1568, Centro</p>
                <p className="location-wrapper">Belo Horizonte, Minas Gerais</p>
            </div>
            <div className="map-info-wrapper">
                <p className="street-wrapper">Rua Afonso Pena, 1568, Centro</p>
                <p className="location-wrapper">Belo Horizonte, Minas Gerais</p>
            </div>
            <p className='opening-hours-wrapper'>Aberto de 10000 a 30000</p>
        </div>
    );
}

export default Map;