import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

import PropTypes from 'prop-types';

const BackButton = ({ destination = '/' }) => {
    return (
        <div className='flex'>
            <Link to={destination} className='bg-yellow-500 px-4 py-1 rounded-lg w-fit'>
                <BsArrowLeft className='text-3xl' />
            </Link>
        </div>
    );
};

BackButton.propTypes = {
    destination: PropTypes.string,
};

export default BackButton;
