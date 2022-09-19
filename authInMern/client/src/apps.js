import{Route, Routes, Navigate } from 'react-router-dom';
import Main from './components/main';
import Signup from './components/Signup';
import Login from './components/login';


function App() {
    const user = localStorage.getItem('token')

  return (
    <Routes>
      {user && <Route path="/" exact element={<Main/>}/>}
      <Routes path="/signup" exact element={<Signup/>}/>
      <Routes path="/login" exact element={<Login/>}/>
      <Routes path="/" exact element={<Navigate replace to="/login"/>}/>
    </Routes>
  );
}

export default App;
