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
        </ul>

        <Routes>
          <Route exact path="/table" element={<Table/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
