import './app.css';
import Navbar from './components/navbar/Nav'
import Sidebar from './components/sidebar/Sidebar';
import Content from './components/content/Content';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='container' style={{marginTop:'10px'}}>
        <Sidebar/>
        <Content/>
      </div>

    </div>
  );
}

export default App;
