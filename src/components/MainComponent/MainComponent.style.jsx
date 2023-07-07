import styled from 'styled-components';

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ProductWrapper = styled.div`
    display: flex;
    margin-top: 10px;
    margin-bottom: 30px;
`

export const ProductImageWrapper = styled.div`
    position: relative;
    background-color: #ccc;
    height: 300px;
    width: 500px;
    border-radius: 10px;
`

export const ProductPriceWrapper = styled.span`
    position: absolute;
    right: 0;
    top: 20px;
    background-color: #000;
    color: #fff;
    padding: 10px;
    border-radius: 5px 0 0 5px;
`
export const ProductInfoWrapper = styled.div`
    margin-left: 50px;
`

export const ProductNameWrapper = styled.h3`
    color: #696969;
    text-transform: uppercase;
`

export const ProductDescriptionWrapper = styled.p`
    font-weight: bold;
`

export const ProductFeaturesWrapper = styled.ul`
    li {
        list-style: none;
    }
`

export const BuyBtnWrapper = styled.button`
    background-color: #f2a50c;
    border: none;
    padding: 10px;
    border-radius: 10px;
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
`