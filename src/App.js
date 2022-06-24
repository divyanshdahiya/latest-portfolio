import Navbar from './compoents/Navbar';
import Header from './compoents/Header';
import Experience from './compoents/Experience';
import Projects from './compoents/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
      <Header/>
      <Experience/>
      <Projects/>
      </div>
    </div>
  );
}

export default App;
