import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Table from "./components/table/table";

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/table">Table</Link>
          </li>
          {/* <li>
            <Link to="/table">Click Me</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li> */}
        </ul>




        <Routes>
          {/* <Route path='/' element={<Table/>} /> */}
          {/* <Route exact path="/" element={<Table/>}/> */}
          <Route exact path="/table" element={<Table/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
