import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home/Home';
import { Employee } from './Components/Employee/Employee';
import { Department } from './Components/department/Department';
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App container">
     <h2 className='d-flex justify-content-center m-3'>
       Frontend From React
     </h2>


    <nav className='navbar navbar-expand-sm bg-light navbar-dark'>
      <ul className='navbar-nav'>
        <li className='nav-item m-1'>
          <NavLink className="btn btn-light btn-outline-primary" to='/home'>HOME</NavLink>
        </li>
        <li className='nav-item m-1'>
          <NavLink className="btn btn-light btn-outline-primary" to='/employee'>Employee</NavLink>
        </li>
        <li className='nav-item m-1'>
          <NavLink className="btn btn-light btn-outline-primary" to='/department'>Department</NavLink>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route exact path='/home' element={<Home />} />
     
      <Route path='/employee' element={<Employee />} />
      
      <Route path='/department' element={<Department />} />
    </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
