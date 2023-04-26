import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Work from './components/Work';
import Header from './components/Header';
import Footer from './components/Footer';
import { useRef } from 'react';


function App() {
  const openMRSRef= useRef(null);
  const googleRef = useRef(null);
  const openAIRef = useRef(null);
  return (
    <>
    <Header />

    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/experience' element={<Experience openAIRef={openAIRef} openMRSRef={openMRSRef} googleRef={googleRef}/>}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/work' element={<Work />}></Route>
    </Routes>

    <Footer />
   </>
  );
}

export default App;
