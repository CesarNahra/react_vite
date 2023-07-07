import { BannerComponent } from "../../components/BannerComponent/BannerComponent";
import { FooterComponent } from "../../components/FooterComponent/FooterComponent";
import { HeaderComponent } from "../../components/HeaderComponent/HeaderComponent";
import { QuestionCardComponent } from "../../components/QuestionCardComponent/QuestionCardComponent";
import { QuestionComponent } from "../../components/QuestionComponent/QuestionComponent";
import { SearchComponent } from '../../components/SearchComponent/SearchComponent';

export const FaqPage = () => {

    const questions = [
        {
            id: 1,
            question: 'Onde são fabricadas as bicicletas',
            response: 'As bicicletas são fabricadas na Holanda, em Amsterdã, no nosso polo criativo',
        },
        {
            id: 2,
            question: 'A cobertura da garantia cobre defeitos de fábrica',
            response: 'Sim, aqui a garantia é total, se a sua bicicleta apresentar defeitos inerentes de fábrica você pode contatar uma de nossas autorizadas ao redor do globo para atendê-lo, se mesmo assim você não se sentir satisfeito nós devolveremos o seu dinheiro de maneira integral, sem qualquer ônus da sua parte. O risco é nosso',
        },
        {
            id: 3,
            question: 'Como andar de bicicleta',
            response: 'Clique nesse <a href="https://www.youtube.com/watch?v=DEjf13F4q3k">link</a> para ter acesso a um tutorial prático e didático de como andar de bicicleta e aproveitar a sua jornada sobre duas rodas'
        }
    ];
    
    return(
        <>
            <HeaderComponent/>
            <BannerComponent subtitle="Dúvidas Frequentes" title="Perguntas Frequentes"/>
            <SearchComponent/>
            {questions.map(question => {return <QuestionComponent key={question.id} card={<QuestionCardComponent question={question.question} response={question.response}/>}/>})}
            <FooterComponent/>
        </>
    );
}