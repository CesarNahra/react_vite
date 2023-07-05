import { useState } from 'react';
import './MainComponent.css';
import './ModalComponent.css';

export const MainComponent = () => {

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(!showModal);
    }

    const ModalComponent = () => {
        return (
            <div className="modal-wrapper">
                <div className="product-wrapper-modal">
                    <div className="product-image-wrapper-modal">
                        <span className="product-price-modal">R$ 1000</span>
                    </div>
                    <div className="product-info-wrapper-modal">
                        <h3 className="product-name-wrapper-modal">Produto 1</h3>
                        <p className="product-description-wrapper-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <ul className="product-features-wrapper-modal">
                            <li><i className="bi bi-bookmark-fill"></i>Olá Mundo</li>
                            <li><i className="bi bi-bookmark-fill"></i>Olá Mundo</li>
                            <li><i className="bi bi-bookmark-fill"></i>Olá Mundo</li>
                            <li><i className="bi bi-bookmark-fill"></i>Olá Mundo</li>
                        </ul>
                        <button type='button' className='btn-buy-wrapper-modal' onClick={handleShowModal}>Fechar modal</button>
                    </div>
                </div>
            </div>
        );
    }

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


    return (
        <div className="main-wrapper">
            <div className="product-wrapper">
                <div className="product-image-wrapper">
                    <span className="product-price-wrapper">R$ 1.000</span>
                </div>
                <div className="product-info-wrapper">
                    <h3 className="product-name-wrapper">Produto 1</h3>
                    <p className="product-description-wrapper">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <ul className="product-features-wrapper">
                        <li><i className="bi bi-bookmark-fill"></i>Olá Mundo</li>
                        <li><i className="bi bi-bookmark-fill"></i>Olá Mundo</li>
                        <li><i className="bi bi-bookmark-fill"></i>Olá Mundo</li>
                        <li><i className="bi bi-bookmark-fill"></i>Olá Mundo</li>
                    </ul>
                    {showModal && <ModalComponent />}
                    <button type='button' className="btn-buy-wrapper" onClick={handleShowModal}>Mais sobre</button>
                </div>
            </div>
        </div>
    );
}