import logo from './logo.svg';
import './App.css';
import LoginPage from "./Components/LoginPage"
import RegistrationPage from './Components/RegistrationPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './Components/HomePage';
import CataloguePage from './Components/CataloguePage';

function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />}></Route>
          <Route path='/register' element={<RegistrationPage />}></Route>
          <Route path='/home' element={<HomePage />}></Route>
          <Route path='/catalog' element={<CataloguePage />}></Route>
        </Routes>
        <b>
          <p className="text-center mt-5">
            <Link to="/register">Register</Link>

          </p>
        </b>
      </BrowserRouter>




    </>
  );
}

export default App;
