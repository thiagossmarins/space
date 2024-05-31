import PropTypes from 'prop-types';
import astronauta from '../../assets/video-modal/astronauta.jpg'

function Thumb({ onClick }) {
    return (
        <div className="thumbnail-container">
            <img src={astronauta} alt="" className="mt-30" onClick={onClick} />
        </div>
    );
}

Thumb.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Thumb;
