import PropTypes from 'prop-types';
import { BannerPrincipalWrapper, SubtitleWrapper, TextYellow, TitleWrapper } from './BannerComponent.style';

export const BannerComponent = ({subtitle, title}) => {
    return(
        <BannerPrincipalWrapper>
            <SubtitleWrapper>{subtitle}</SubtitleWrapper>
            <TitleWrapper>{title}<TextYellow>.</TextYellow></TitleWrapper>
        </BannerPrincipalWrapper>
    );
}

BannerComponent.propTypes = {
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}