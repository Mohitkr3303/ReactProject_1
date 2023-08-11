import {BrowserRouter as Routers,Routes,Route} from "react-router-dom";
import "./Style/App.scss";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Service from "./Components/Service";


function App() {
  return (
   <>

   <Routers>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/service" element={<Service/>}/>
    </Routes>
    <Footer/>
   </Routers>
   
   </>
  );
}

export default App;
