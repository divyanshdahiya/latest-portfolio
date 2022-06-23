import Navbar from './compoents/Navbar';
import Header from './compoents/Header';
import Experience from './compoents/Experience';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
      <Header/>
      <Experience/>
      </div>
    </div>
  );
}

export default App;
