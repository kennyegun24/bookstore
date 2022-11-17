import { useDispatch, useSelector } from 'react-redux';
import { category } from '../redux/categories/categories';

import './category.css';

const Categories = () => {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.categories);

  const statusCheck = () => {
    dispatch(category());
  };
  return (
    <>
      <button className="button2" type="button" onClick={statusCheck}>Check status</button>
      <span>{status}</span>
    </>
  );
};
export default Categories;
