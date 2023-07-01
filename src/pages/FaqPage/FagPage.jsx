import { BannerComponent } from "../../components/BannerComponent/BannerComponent";
import { FooterComponent } from "../../components/FooterComponent/FooterComponent";
import { HeaderComponent } from "../../components/HeaderComponent/HeaderComponent";
import { SearchComponent } from '../../components/SearchComponent/SearchComponent';

export const FaqPage = () => {
    return(
        <>
            <HeaderComponent/>
            <BannerComponent subtitle="Dúvidas Frequentes" title="Perguntas Frequentes"/>
            <SearchComponent/>
            <FooterComponent/>
        </>
    );
}