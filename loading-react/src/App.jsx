
import './App.css'
import { useState } from "react";
import { loadingContext, ThemeContext } from "../src/Context/Context";
import { BrowserRouter, Route, Routes} from "react-router-dom"

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Loading from './pages/Loading';


function App() {
  const [theme, setTheme] = useState(false);
  const [data, setData] = useState(false);


  return (
    <section className={theme?"dark":""}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <loadingContext.Provider value={{ data, setData }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={data?<Home/>:<Loading/>}/>
              <Route path="/about" element={data?<About/>:<Loading/>}/>
              <Route path="/contact" element={data?<Contact/>:<Loading/>}/>
            </Routes>
          </BrowserRouter>
        </loadingContext.Provider>  
      </ThemeContext.Provider>
    </section>
  )
}

export default App
