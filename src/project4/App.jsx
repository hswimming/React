import React from 'react';
import "project4/project4.css";
import "project4/component/button.css";
import "project4/component/header.css";
import { Link, Route, Routes } from 'react-router-dom';
import Home from 'project4/Home';
import New from 'project4/New';
import Diary from 'project4/Diary';
import Edit from 'project4/Edit';

function App(props) {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/new" element={<New />}/>
            <Route path="/diary/:id" element={<Diary />}/>
            <Route path="/edit" element={<Edit />}/>
         </Routes>
         <div>
            <Link to={"/"}>Home</Link>
            <Link to={"/new"}>New</Link>
            <Link to={"/diary"}>Diary</Link>
            <Link to={"/edit"}>Edit</Link>
         </div>
      </div>
   );
}

export default App;