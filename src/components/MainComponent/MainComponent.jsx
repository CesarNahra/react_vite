import { useContext, useState } from 'react';
import { ModalContext } from '../../contexts/ModalContext/ModalContext';
import { BuyBtnWrapper, MainWrapper, ProductDescriptionWrapper, ProductFeaturesWrapper, ProductImageWrapper, ProductInfoWrapper, ProductNameWrapper, ProductPriceWrapper, ProductWrapper } from './MainComponent.style';

export const MainComponent = () => {

    const { setShow, setData } = useContext(ModalContext);

    const handleShowModal = () => {
        setData(products);
        setShow(true);
    }


    const products = [
        {
            id: 1,
            name: 'Produto 1',
            price: 2000,
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        },
        // {
        //     id: 2,
        //     name: 'Produto 2',
        //     price: 5000,
        //     description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        // },
        // {
        //     id: 3,
        //     name: 'Produto 3',
        //     price: 10000,
        //     description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        // },
    ]


    return (
        <MainWrapper>
            {products.map(product => {
                return (
                    <ProductWrapper>
                        <ProductImageWrapper>
                            <ProductPriceWrapper>{product.price}</ProductPriceWrapper>
                        </ProductImageWrapper>
                        <ProductInfoWrapper>
                            <ProductNameWrapper>{product.name}</ProductNameWrapper>
                            <ProductDescriptionWrapper>{product.description}</ProductDescriptionWrapper>
                            <ProductFeaturesWrapper>
                                <li><i className="bi bi-bookmark-fill"></i>Olá Mundo</li>
                                <li><i className="bi bi-bookmark-fill"></i>Olá Mundo</li>
                                <li><i className="bi bi-bookmark-fill"></i>Olá Mundo</li>
                                <li><i className="bi bi-bookmark-fill"></i>Olá Mundo</li>
                            </ProductFeaturesWrapper>
                            <BuyBtnWrapper onClick={handleShowModal}>Mais sobre</BuyBtnWrapper>
                        </ProductInfoWrapper>
                    </ProductWrapper>
                )
            })}
        </MainWrapper>
    );
}