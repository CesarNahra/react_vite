import { useContext, useState } from 'react';
import './MainComponent.css';
import { ModalContext } from '../../contexts/ModalContext/ModalContext';
import { MainWrapper, ProductImageWrapper, ProductInfoWrapper, ProductWrapper } from './MainComponent.style';

export const MainComponent = () => {

    const { setShow, setData } = useContext(ModalContext);

    const handleShowModal = () => {
        setData({
            title: 'modal exibido a partir do card',
            description: 'cesar@gmail.com',
        });
        setShow(true);
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
        <MainWrapper>
            {products.map(product => {
                return (
                    <ProductWrapper>
                        <ProductImageWrapper>
                            <span className="product-price-wrapper">{product.price}</span>
                        </ProductImageWrapper>
                        <ProductInfoWrapper>
                            <h3 className="product-name-wrapper">{product.name}</h3>
                            <p className="product-description-wrapper">{product.description}</p>
                            <ul className="product-features-wrapper">
                                <li><i className="bi bi-bookmark-fill"></i>Olá Mundo</li>
                                <li><i className="bi bi-bookmark-fill"></i>Olá Mundo</li>
                                <li><i className="bi bi-bookmark-fill"></i>Olá Mundo</li>
                                <li><i className="bi bi-bookmark-fill"></i>Olá Mundo</li>
                            </ul>
                            <button type='button' className="btn-buy-wrapper" onClick={handleShowModal}>Mais sobre</button>
                        </ProductInfoWrapper>
                    </ProductWrapper>
                )
            })}
        </MainWrapper>
    );
}