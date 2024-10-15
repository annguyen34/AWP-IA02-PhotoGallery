import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PhotoDetail from './pages/PhotoDetail';

// App: The main component that holds the routing configuration.

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/photos" element={<Home />} />
        <Route path="/photos/:id" element={<PhotoDetail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
