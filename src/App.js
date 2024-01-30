import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingView } from './Pages/LandingView/LandingView';
import { Countries } from './Pages/Web/Countries/Countries';
import { Loader } from './Components/Loader/Loader';
import { BlogSec } from './Pages/Web/BlogSec/BlogSec';
function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/countries' element={<Countries />} />
          <Route path='/' element={<LandingView />} />
          <Route path='/loader' element={<Loader />} />
          <Route path='/blogs' element={<BlogSec />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
