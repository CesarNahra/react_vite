import styled from 'styled-components';

export const Row = styled.div`
    background-color: #111;
    color: #fff;
    height: 320px;
    padding: 20px;
    border-top: 1px solid #ccc;
`

export const LogoWrapper = styled.div`
    position: relative;
`

export const ContactWrapper = styled.div`
    ul {
        border-bottom: 1px solid #e1e1e1; 
        li {
            list-style: none;
        }
    }
`

export const SocialLinks = styled.ul`
    li {
        display: inline-block;
        margin-right: 20px;
        a {
            text-decoration: none;
            color: #fff;
        } 
    }
`

export const IconsWrapper = styled.span`
    font-size: 30px;
`

export const InfoLinks = styled.ul`
    li {
        list-style: none;
        margin-bottom: 20px;
    }
`

export const Copyright = styled.p`
    position: absolute;
    bottom: 0
`