import {Routes, Route} from 'react-router-dom'
import {Home} from './Components/Home';
import Profile from './Components/Profile';
import {Navbar} from './Components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path = '/' element = {<Home />}></Route>
      <Route path = 'profile' element = {<Profile />}></Route>
    </Routes>
    </>
  );
}

export default App;
