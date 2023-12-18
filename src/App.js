import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingView } from './Pages/LandingView/LandingView';
import { Countries } from './Pages/Countries/Countries';
function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/countries' element={<Countries />} />
          <Route path='/' element={<LandingView />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
