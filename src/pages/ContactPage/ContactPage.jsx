import { HeaderComponent } from '../../components/HeaderComponent/HeaderComponent';
import { FooterComponent } from '../../components/FooterComponent/FooterComponent';
import { BannerComponent } from '../../components/BannerComponent/BannerComponent';
import { MapComponent } from '../../components/MapComponent/MapComponent';
import { FormComponent } from '../../components/FormComponent/FormComponent';

export const ContactPage = () => {
    
    return(
        <>
            <HeaderComponent/>
            <BannerComponent subtitle='Entre em contato conosco' title='Contato'/>
            {/* <MenuComponent/>
            <div>
                ContactPage is render
            </div> */}
            <FormComponent/>
            <MapComponent/>
            <FooterComponent/>
        </>
    );

}