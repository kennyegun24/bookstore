import React from 'react';
import { useSelector } from 'react-redux';
import Book from './home';
import Form from './form';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <>
      {books.map((book) => (
        <Book key={book.id} id={book.id} title={book.title} author={book.author} />
      ))}
      <Form />
    </>
  );
};

export default Books;