import './App.css';
import Navbar from '../Navbar/navbar';
import Login from '../Login/login';
import SignUpPage from '../Signup/signup';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route element={<Login/>} path='/'/>
        <Route element={<SignUpPage/>} path='signup'/>
      </Routes>
    </div>
  );
}

export default App;
