import{Route, Routes, Navigate } from 'react-router-dom';
import Main from './components/main';
import Login from './components/login';
import SignUp from "./components/Signup";




function App() {
    const user = localStorage.getItem('token')

  return (
    
     <Routes>
      <Main/>
      {user && <Route path="/" exact element={<Main/>}/>}
      <Routes path="/signup" exact element={<SignUp/>}/>
      <Routes path="/login" exact element={<Login/>}/>
      <Routes path="/" exact element={<Navigate replace to="/login"/>}/>
    </Routes>  
    
  );
}

export default App;
