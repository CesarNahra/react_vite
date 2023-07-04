import './MainComponent.css';

export const MainComponent = () => {

    // const [showModal, setShowModal] = useState(false);

    // const handleShowModal = () => {
    //     setShowModal(!showModal);
    // }

    const products = [
        {
            id: 1,
            name: 'Produto 1',
            price: 2000,
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
            id: 2,
            name: 'Produto 2',
            price: 5000,
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
            id: 3,
            name: 'Produto 3',
            price: 10000,
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        },
    ]

    
    return(
        <div className="main-wrapper">
            <div className="product-wrapper">
                <div className="product-image-wrapper">
                    <span className="product-price-wrapper">{products[0].price}</span>
                </div>
                <div className="product-info-wrapper">
                    <h3 className="product-name-wrapper">{products[0].name}</h3>
                    <p className="product-description-wrapper">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <ul className="product-features-wrapper">
                        <li><i class="bi bi-bookmark-fill"></i>Olá Mundo</li>
                        <li><i class="bi bi-bookmark-fill"></i>Olá Mundo</li>
                        <li><i class="bi bi-bookmark-fill"></i>Olá Mundo</li>
                        <li><i class="bi bi-bookmark-fill"></i>Olá Mundo</li>
                    </ul>
                    <button type='button' className="btn-buy-wrapper">Mais sobre</button>
                </div>
            </div>
        </div>
    );
}