import PropTypes from 'prop-types';
import Card from './Card';

const BooksCard = ({ books }) => {
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {books.map((book) => (
                <Card book={book} key={book._id} />
            ))}
        </div>
    );
};

BooksCard.propTypes = {
    books: PropTypes.array,
};

export default BooksCard;
