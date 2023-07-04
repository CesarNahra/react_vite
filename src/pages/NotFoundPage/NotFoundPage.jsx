import { HeaderComponent } from '../../components/HeaderComponent/HeaderComponent';
import { FooterComponent } from '../../components/FooterComponent/FooterComponent';
import { BannerComponent } from '../../components/BannerComponent/BannerComponent';
import { NotFoundComponent } from '../../components/NotFoundComponent/NotFoundComponent';

export const NotFoundPage = () => {
    
    return(
        <>
            <HeaderComponent/>
            <BannerComponent subtitle='VIXI. Não encontramos essa página' title='Oppsss'/>
            <NotFoundComponent/>
            <FooterComponent/>
        </>
    );

}