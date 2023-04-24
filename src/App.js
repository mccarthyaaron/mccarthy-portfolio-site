import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';
import Header from './components/Header';
import Footer from './components/Footer';
import { useRef } from 'react';

function App() {
  const myWorkRef = useRef(null);

  return (
    <>
    <Header myWorkRef={myWorkRef} />

    <Routes>
      <Route path='/' element={<Home myWorkRef={myWorkRef}/>}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/work' element={<Work />}></Route>
    </Routes>

    {/* <Footer /> */}
   </>
  );
}

export default App;
