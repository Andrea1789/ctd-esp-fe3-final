import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContextProvider } from './Components/utils/global.context';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";

function App() {
  return (
      <div className="App">
        <ContextProvider>
          <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/dentist/:id' element={<Detail/>}/>
              <Route path='/favs' element={<Favs/>}/>
              <Route path='/contact' element={<Contact/>}/>
            </Routes>
          <Footer/>
          </BrowserRouter>
          </ContextProvider>
      </div>
  );
}

export default App;
