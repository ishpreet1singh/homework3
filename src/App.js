import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Menu from './Menu';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <header>
        <div className="header-content">
          <img
            src="https://marketplace.canva.com/EAFpeiTrl4c/2/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-a1RYzvS1EFo.jpg"
            alt="Logo"
            className="logo"
          />
          <div className="title-block">
            <h1>Ishpreet's restaurant</h1>
            <p className="stars">★★★★★</p>
          </div>
        </div>
      </header>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div className="hero-wrapper">
              <div className="hero-image">
                <img
                  src="https://cdn.hungryonion.org/optimized/3X/5/c/5cc57b922a2ef85f42a41f2de7f5d48dd15bff69_2_700x502.jpeg"
                  alt="Punjabi Thali"
                />
              </div>
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
