import Navbar from './compoents/Navbar';
import Header from './compoents/Header';
import Experience from './compoents/Experience';
import Projects from './compoents/Projects';
import Skills from './compoents/Skills';
import Contact from './compoents/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
      <Header/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Contact/>
      </div>
    </div>
  );
}

export default App;
