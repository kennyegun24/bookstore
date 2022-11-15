import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './home';
import Form from './form';
import { getBooks } from '../redux/book/book';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <>
      {books.map((book) => (
        <Book key={book.item_id} id={book.item_id} title={book.title} author={book.author} />
      ))}
      <Form />
    </>
  );
};

export default Books;
