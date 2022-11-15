import './home.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/book/book';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();

  const deleted = () => {
    dispatch(removeBook(id));
  }

  return (
    <section className="sec">
      <p>{title}</p>
      <p>{author}</p>
      <button type="button" onClick={ deleted }>Remove</button>
    </section>
  )
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
