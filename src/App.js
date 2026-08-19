import About from './components/About';
import Contacts from './components/Contacts';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="overflow-hidden bg-[#0b0e16]">
      <NavBar />
      <main className="lg:pl-[255px]">
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contacts />
      </main>
    </div>
  );
}

export default App;
