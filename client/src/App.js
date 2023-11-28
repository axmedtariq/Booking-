import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import List from './pages/List/Hotel';
import Hotel from './pages/Hotel/Hotel';
import Login from './pages/Login/Login';



function App() {
  return (
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<Home />}/>
    <Route path="/hotels" element={<List/>}/>
    <Route path="/hotels/:id" element={<Hotel/>}/>
    <Route path="/Login" element={<Login/>}/>




    </Routes>
    </BrowserRouter>
  );
}

export default App;
