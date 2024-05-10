import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
import { BsInfoCircle } from 'react-icons/bs';
import PropTypes from 'prop-types';

const BooksTable = ({ books }) => {
    return (
        <table className='my-4 w-full border-collapse'>
            <thead>
                <tr>
                    <td className='border border-slate-600 rounded-md font-bold text-center'>#</td>
                    <td className='border border-slate-600 rounded-md font-bold text-center'>
                        Title
                    </td>
                    <td className='border border-slate-600 rounded-md font-bold text-center max-md:hidden'>
                        Author
                    </td>
                    <td className='border border-slate-600 rounded-md font-bold text-center max-md:hidden'>
                        Publish Year
                    </td>
                    <td className='border border-slate-600 rounded-md font-bold text-center'>
                        Operations
                    </td>
                </tr>
            </thead>

            <tbody>
                {books.map((book, index) => (
                    <tr key={book._id} className='h-8'>
                        <td className='border border-slate-600 rounded-md text-center'>
                            {index + 1}
                        </td>
                        <td className='border border-slate-600 rounded-md text-center'>
                            {book.title}
                        </td>
                        <td className='border border-slate-600 rounded-md text-center max-md:hidden'>
                            {book.author}
                        </td>
                        <td className='border border-slate-600 rounded-md text-center max-md:hidden'>
                            {book.publishedYear}
                        </td>
                        <td className='border border-slate-600 rounded-md text-center'>
                            <div className='flex justify-center gap-x-4'>
                                <Link to={`/books/details/${book._id}`}>
                                    <BsInfoCircle className='text-2xl text-green-600 hover:text-green-800' />
                                </Link>
                                <Link to={`/books/edit/${book._id}`}>
                                    <AiOutlineEdit className='text-2xl text-yellow-500 hover:text-yellow-700' />
                                </Link>
                                <Link to={`/books/delete/${book._id}`}>
                                    <MdOutlineDelete className='text-2xl text-red-600 hover:text-red-800' />
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

BooksTable.propTypes = {
    books: PropTypes.array,
};

export default BooksTable;
