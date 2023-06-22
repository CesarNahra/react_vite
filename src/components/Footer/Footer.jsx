import './Footer.css';

function Footer() {
    return (
        <div className="row">
            <div className="logo-wrapper col-sm-4">
                <h3 className="logo">Minha Empresa</h3>
                <p className="copyright">Minha Empresa &copy; <span className='right-reserved'>Todos os direitos reservados</span></p>
            </div>
            <div className="contact-wrapper col-sm-4">
                <h3 className="contact">Contato</h3>
                <ul className="contact-links">
                    <li><span className='icons-wrapper'><i class="bi bi-telephone"></i></span>+55 31 00000-0000</li>
                    <li><span className="icons-wrapper"><i class="bi bi-envelope"></i></span>contato@contato.minhaempresa.com</li>
                </ul>
                <ul className="address">
                    <li><span className="icons-wrapper"><i class="bi bi-geo-alt"></i></span>Rua da Chiquinha 123 - Mooca</li>
                    <li>São Paulo - SP</li>
                </ul>
                <ul className="social-links">
                    <li><a href="https://www.instagram.com"><span className="icons-wrapper"><i class="bi bi-instagram"></i></span></a></li>
                    <li><a href="https://www.facebook.com"><span className="icons-wrapper"><i class="bi bi-facebook"></i></span></a></li>
                    <li><a href="https://www.youtube.com"><span className="icons-wrapper"><i class="bi bi-youtube"></i></span></a></li>
                </ul>
            </div>
            <div className="info-wrapper col-sm-4">
                <h3 className="info">Informações</h3>
                <ul className="infos-links">
                    <li>Produtos</li>
                    <li>Contato</li>
                    <li>FAQ</li>
                    <li>Termos e Condições</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;