import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Header />

    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/work' element={<Work />}></Route>
    </Routes>

    {/* <Footer /> */}
    </>
  );
}

export default App;
