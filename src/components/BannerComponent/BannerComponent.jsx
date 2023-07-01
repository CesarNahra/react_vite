import './BannerComponent.css';
import PropTypes from 'prop-types';

export const BannerComponent = ({subtitle, title}) => {
    return(
        <div className="banner-principal-wrapper">
            <h2 className="subtitle-wrapper">{subtitle}</h2>
            <h1 className="title-wrapper">{title}<span className='text-yellow'>.</span></h1>
        </div>
    );
}

BannerComponent.propTypes = {
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}