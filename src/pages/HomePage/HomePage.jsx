import { HeaderComponent } from '../../components/HeaderComponent/HeaderComponent';
import { FooterComponent } from '../../components/FooterComponent/FooterComponent';
import { BannerComponent } from '../../components/BannerComponent/BannerComponent';
import { MainComponent } from '../../components/MainComponent/MainComponent';
import { ModalComponent } from '../../components/ModalComponent/ModalComponent';
import { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext/ModalContext';

export const HomePage = () => {

    const { show } = useContext(ModalContext);
    
    return(
        <>
            <HeaderComponent/>
            <BannerComponent subtitle='Escolha a melhor bicicleta para você' title='Nossos produtos'/>
            <MainComponent/>
           {show && <ModalComponent/>}
            <FooterComponent/>
        </>
    );

}