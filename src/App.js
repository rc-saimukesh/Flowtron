import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Services from "./components/services";
import About from "./components/who&why";
import Contact from "./components/ContactUs";
import Footer from "./components/Footer"


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
