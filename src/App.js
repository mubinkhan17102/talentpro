import {useEffect, useState} from 'react';
import './app.css';
import Navbar from './components/navbar/Nav'
import Sidebar from './components/sidebar/Sidebar';
import Content from './components/content/Content';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Upload from './components/upload/Upload';
import Login from './components/login/Login';
import Registration from './components/registration/Registration';

function App() {
  const [login,setLogin] = useState(false);
  const [token, setToken] = useState('');

  const changeToken = (value)=>{
    setToken(value);
  }
  const changeLogin = (value)=>{
    setLogin(value);
  }

  return (
    <>
    <Router className="App">
      <Navbar login={login} changeToken={changeToken} changeLogin={changeLogin}/>
      <div className='container' style={{marginTop:'10px'}}>
        <Sidebar/>
          <Routes>
            <Route path='/' element={<Content login={login}/>}/>
            <Route 
              path='/upload' 
              element={<Upload login={login} token={token}/>}
            />
            <Route 
              path='/login' 
              element={<Login login={login}  changeToken={changeToken} changeLogin ={changeLogin}/>}
            />
            <Route
             path='/register' 
              element={<Registration login={login}/>}
             />
          </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
