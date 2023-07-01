import { HeaderComponent } from '../../components/HeaderComponent/HeaderComponent';
import { FooterComponent } from '../../components/FooterComponent/FooterComponent';
import { BannerComponent } from '../../components/BannerComponent/BannerComponent';

export const NotFoundPage = () => {
    
    return(
        <>
            <HeaderComponent/>
            <BannerComponent subtitle='VIXI. Não encontramos essa página' title='Oppsss'/>
            <FooterComponent/>
        </>
    );

}