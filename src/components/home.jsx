import './home.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/book/book';

const Book = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();

  const deleted = () => {
    dispatch(removeBook(id));
  };

  return (
    <section className="sec flex jstSpb aliCnt">
      <div className="firstDiv">
        <p className="category">{category}</p>
        <p className="title">{title}</p>
        <p className="author">{author}</p>
        <div className="btnDiv flex">
          <button className="button" type="button">Comment</button>
          <span className="horizontal" />
          <button className="button" type="button" onClick={deleted}>Remove</button>
          <span className="horizontal" />
          <button className="button" type="button">Edit</button>
        </div>
      </div>
      <div className="secondDiv">
        <p className="round" />
        <div>
          <p className="percentage">8%</p>
          <p className="complete">completed</p>
        </div>
      </div>
      <div className="thirdDiv">
        <h4 className="current">
          CURRENT CHAPTER
        </h4>
        <h4 className="chapter">
          Chapter 15
        </h4>
        <button type="button" className="progress">
          UPDATE PROGRESS
        </button>
      </div>
    </section>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
