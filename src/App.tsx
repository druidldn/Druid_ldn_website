import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Builds from './pages/Builds/Builds';
import Hire from './pages/HirePage/HirePage';
import About from './pages/About/About';
import { PageStyles } from './App.styles';

function App() {
  return (
    <PageStyles>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/builds" element={<Builds />} />
            <Route path="/hire" element={<Hire />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </Router>
    </PageStyles>

  );
}

export default App;
