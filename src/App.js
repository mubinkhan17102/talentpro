import './app.css';
import Navbar from './components/navbar/Nav'
import Sidebar from './components/sidebar/Sidebar';
import Content from './components/content/Content';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Upload from './components/upload/Upload';

function App() {

  return (
    <>
    <Router className="App">
      <Navbar/>
      <div className='container' style={{marginTop:'10px'}}>
        <Sidebar/>
          <Routes>
            <Route path='/' element={<Content/>}/>
            <Route path='/upload' element={<Upload/>}/>
          </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
