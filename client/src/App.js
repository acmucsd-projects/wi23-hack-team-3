import {Routes, Route} from 'react-router-dom'
import {Home} from './Components/Home';
import Profile from './Components/Profile';
import {Navbar} from './Components/Navbar';
import {Friends} from './Components/Friends';

import React, { useState } from "react";

function App() {

  const [optionValue, setOptionValue] = useState("");
  const handleSelect = (e) => {
    console.log(e.target.value);
    setOptionValue(e.target.value);
  }


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path = 'profile' element = {<Profile />}/>
        <Route path = 'friends' element = {<Friends />}/>
      </Routes>
    </>
  );
}

export default App;
