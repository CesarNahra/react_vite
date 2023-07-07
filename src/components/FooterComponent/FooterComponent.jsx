import { ContactWrapper, Copyright, IconsWrapper, InfoLinks, LogoWrapper, Row, SocialLinks } from './FooterComponent.style';

export const FooterComponent = () => {
    return(
        <Row className="row">
            <LogoWrapper className="col-sm-4">
                <h3 className='logo'>Minha Empresa</h3>
                <Copyright>Minha Empresa &copy; <span className='right-reserved'>Todos os direitos reservados</span></Copyright>
            </LogoWrapper>
            <ContactWrapper className="col-sm-4">
                <h3 className="contact">Contato</h3>
                <ul className="contact-links">
                    <li><IconsWrapper><i className="bi bi-telephone"></i></IconsWrapper>+55 31 00000-0000</li>
                    <li><IconsWrapper><i className="bi bi-envelope"></i></IconsWrapper>contato@contato.minhaempresa.com</li>
                </ul>
                <ul className="address">
                    <li><IconsWrapper><i className="bi bi-geo-alt"></i></IconsWrapper></li>
                    <li>São Paulo</li>
                </ul>
                <SocialLinks>
                    <li><a href="https://www.instagram.com"><IconsWrapper><i className="bi bi-instagram"></i></IconsWrapper></a></li>
                    <li><a href="https://www.facebook.com"><IconsWrapper><i className="bi bi-facebook"></i></IconsWrapper></a></li>
                    <li><a href="https://www.youtube.com"><IconsWrapper><i className="bi bi-youtube"></i></IconsWrapper></a></li>
                </SocialLinks>
            </ContactWrapper>
            <div className="info-wrapper col-sm-4">
                <h3 className="info">Informações</h3>
                <InfoLinks>
                    <li>Produtos</li>
                    <li>Contato</li>
                    <li>FAQ</li>
                    <li>Termos e Condições</li>
                </InfoLinks>
            </div>
        </Row>
    );
}