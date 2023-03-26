import './App.css';
import Navbar from '../Navbar/navbar';
import Login from '../Login/loginpage';
import SignUpPage from '../Signup/signuppage';
import Todos from '../Todos/todospage';
import CreatePage from '../Create/createpage';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route element={<Login/>} path='/'/>
        <Route element={<SignUpPage/>} path='signup'/>
        <Route element={<CreatePage/>} path='create-todos'/>
        <Route element={<Todos/>} path='todos' />
      </Routes>
    </div>
  );
}

export default App;
