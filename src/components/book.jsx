import React from "react";
import Book from "./home"
import Form from "./form";

const data = [
  {
    id: 1,
    title: 'Alice in wonderland',
    author: 'Kenny',
  },
  {
    id: 1,
    title: 'Alice in wonderland',
    author: 'Kenny',
  },
  {
    id: 1,
    title: 'Alice in wonderland',
    author: 'Kenny',
  },
  {
    id: 1,
    title: 'Alice in wonderland',
    author: 'Kenny',
  },
  {
    id: 1,
    title: 'Alice in wonderland',
    author: 'Kenny',
  },
];

const Books = () => (
  <div>
    {data.map((book) => (
      <Book key={book.id} title={book.title} author={book.author} />
    ))}
  <Form />
  </div>
);

export default Books;
