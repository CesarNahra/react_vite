import './QuestionComponent.css';

export const QuestionComponent = () => {
    return (
        <div className="accordion-wrapper">
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Onde são fabricadas as bicicletas
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">As bicicletas são fabricadas na Holanda, em Amsterdã, no nosso polo criativo</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            A cobertura da garantia cobre defeitos de fábrica
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Sim, aqui a garantia é total, se a sua bicicleta apresentar defeitos inerentes de fábrica você pode contatar uma de nossas autorizadas ao redor do globo para atendê-lo, se mesmo assim você não se sentir satisfeito nós devolveremos o seu dinheiro de maneira integral, sem qualquer ônus da sua parte. O risco é nosso</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Como andar de bicicleta
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Clique nesse <a href="https://www.youtube.com/watch?v=DEjf13F4q3k">link</a> para ter acesso a um tutorial prático e didático de como andar de bicicleta e aproveitar a sua jornada sobre duas rodas</div>
                    </div>
                </div>
            </div>
        </div>
    );
}