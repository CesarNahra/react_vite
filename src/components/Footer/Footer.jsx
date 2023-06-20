import './Footer.css';

function Footer() {
    return (
        <div className="footer-wrapper">
                <div className="footer-logo-wrapper col-sm-4">
                    <h2>Minha Empresa</h2>
                </div>
                <div className="footer-logo-wrapper col-sm-4">
                    <h2>Contato</h2>
                    <ul>
                        <li>gmail@gmail.com</li>
                        <li>Olá Mundo</li>
                        <li>Olá Mundo</li>
                        <li>Olá Mundo</li>
                    </ul>
                </div>
                <div className="footer-logo-wrapper col-sm-4">
                <h2>Links</h2>
                    <ul>
                        <li><a href="#">Produtos</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </div>
        </div>
    );
}

export default Footer;