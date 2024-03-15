import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingView } from './Pages/LandingView/LandingView';
import { Countries } from './Pages/Web/Countries/Countries';
import { Loader } from './Components/Loader/Loader';
import { BlogSec } from './Pages/Web/BlogSec/BlogSec';
import { CountryView } from './Pages/CountryView/CountryView';
import { AllCourses } from './Pages/Web/AllCourses/AllCourses';
import { NewContactForm } from './Pages/Web/NewContactForm/NewContactForm';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingView />} />
          <Route path='/loader' element={<Loader />} />
          <Route path='/blogs' element={<BlogSec />} />
          <Route path='/countries' element={<CountryView />} />
          <Route path='/TopCourses' element={<AllCourses />} />
          <Route path='/new' element={<NewContactForm />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
