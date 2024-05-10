import { useState } from 'react';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateBooks = () => {
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishedYear, setPublishedYear] = useState('');
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleSaveBook = () => {
        const data = {
            title,
            author,
            publishedYear,
        };
        setLoading(true);

        console.log(typeof data.publishYear);

        axios
            .post('http://localhost:5555/books', data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Book created successfully', { variant: 'success' });
                navigate('/');
            })
            .catch((err) => {
                console.error(err);
                enqueueSnackbar('Error', { variant: 'error' });
                setLoading(false);
            });
    };

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl font-bold text-center my-4'>Create Book</h1>

            {loading ? (
                <Spinner />
            ) : (
                <div className='flex flex-col border-2 border-black rounded-xl w-[600px] p-4 mx-auto'>
                    <div className='my-4'>
                        <label className='text-md mr-4 text-gray-500'>Title</label>
                        <input
                            type='text'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className='border-2 border-gray-500 px-4 py-2 w-full'
                        />
                    </div>
                    <div className='my-4'>
                        <label className='text-md mr-4 text-gray-500'>Author</label>
                        <input
                            type='text'
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            className='border-2 border-gray-500 px-4 py-2 w-full'
                        />
                    </div>
                    <div className='my-4'>
                        <label className='text-md mr-4 text-gray-500'>Publish Year</label>
                        <input
                            type='number'
                            value={publishedYear}
                            onChange={(e) => setPublishedYear(e.target.value)}
                            className='border-2 border-gray-500 px-4 py-2 w-full'
                        />
                    </div>

                    <button
                        className='p-2 bg-green-700 m-8 rounded-xl text-white font-bold ring-1 ring-black'
                        onClick={handleSaveBook}
                    >
                        Save
                    </button>
                </div>
            )}
        </div>
    );
};

export default CreateBooks;
