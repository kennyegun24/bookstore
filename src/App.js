import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Books from './components/book';
import Categories from './components/categories';
import './App.css';

const App = () => (
  <>
    <Navbar />

    <div className="center">
      <div>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/category" element={<Categories />} />
        </Routes>
      </div>
    </div>
  </>
);

export default App;
