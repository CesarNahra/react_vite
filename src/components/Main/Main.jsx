import './Main.css';

function Main() {
    return (
        <div className="main-wrapper">
            <div className="product-wrapper">
                <div className="product-image-wrapper">
                    <span className='product-price-wrapper'>R$1.000</span>
                </div>
                <div className="product-info-wrapper">
                    <h3 className='product-name-wrapper'>Produto 1</h3>
                    <p className="product-description-wrapper">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <ul className="product-features-wrapper">
                        <li>Olá Mundo</li>
                        <li>Olá Mundo</li>
                        <li>Olá Mundo</li>
                        <li>Olá Mundo</li>
                    </ul>
                    <button className="btn-buy-wrapper">Comprar</button>
                </div>
            </div>
        </div>
    );
}

export default Main;