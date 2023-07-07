import styled from 'styled-components';

export const MapWrapper = styled.div`
    h2 {
        font-size: 25px;
        text-transform: uppercase;
    }
`

export const MapImageWrapper = styled.div`
    height: 250px;
    background-color: yellow;
    border-top: 10px solid red;
`

export const MapInfoWrapper = styled.div`
    background-color: #dfdfdf;
    padding: 5px;
    h3 {
        font-weight: bold;
    }
`

export const CityLocationWrapper = styled.div`
    display: flex;
    text-align: center;
    ul {
        li {
            list-style: none;
        }
    }
`

export const OpeningHoursWrapper = styled.div`
    text-transform: uppercase;
    font-weight: bold;
`