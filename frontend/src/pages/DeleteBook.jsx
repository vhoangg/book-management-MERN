import { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteBook = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();

    const handleDeleteBook = () => {
        setLoading(true);
        axios
            .delete(`http://localhost:5555/books/${id}`)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Book deleted successfully', { variant: 'success' });
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
            <h1 className='text-3xl font-bold text-center my-4'>Delete Book</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col items-center border-2 border-black rounded-xl w-[600px] p-8 mx-auto'>
                <h3 className='text-2xl'>Are you sure you want to delete this book?</h3>
                <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteBook}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default DeleteBook;
