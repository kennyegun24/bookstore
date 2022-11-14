import './home.css';
import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <section className="sec">
    <p>{title}</p>
    <p>{author}</p>
    <button type="button">Remove</button>
  </section>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
