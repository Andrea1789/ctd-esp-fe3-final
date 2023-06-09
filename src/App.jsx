import {  Routes, Route } from 'react-router-dom';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import NotFound from "./Components/NotFound";
import { useContextGlobal } from './Components/utils/global.context';

function App() {
const { state } = useContextGlobal();


  return (
      <div className={state.theme + " App"}>
          <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/dentist/:id' element={<Detail/>}/>
              <Route path='/favs' element={<Favs/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path="*" element={<NotFound />}/>
            </Routes>
          <Footer/>
      </div>
  );
}

export default App;
