import React from "react";
import Home from "./home"
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
      <Home key={book.id} title={book.title} author={book.author} />
    ))}
  <Form />
  </div>
);

export default Books;
