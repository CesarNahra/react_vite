import { HeaderComponent } from '../../components/HeaderComponent/HeaderComponent';
import { FooterComponent } from '../../components/FooterComponent/FooterComponent';
import { BannerComponent } from '../../components/BannerComponent/BannerComponent';
import { MainComponent } from '../../components/MainComponent/MainComponent';

export const HomePage = () => {
    
    return(
        <>
            <HeaderComponent/>
            <BannerComponent subtitle='Escolha a melhor bicicleta para você' title='Nossos produtos'/>
            <MainComponent/>
            {/* <MenuComponent/>
            <div>
                HomePage is render
            </div> */}
            <FooterComponent/>
        </>
    );

}