import Clinet from "./components/Clinet";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
//import Adds from "./pages/Adds.jsx/Adds";
import Feature from "./pages/Featured product/Feature";

function App() {
  return (
    <div className="">
    <NavBar/>
    <Hero/>
    {/* <Adds/> */}
    <Feature/>
    <Clinet/>
    <Footer/>
    </div>
  );
}

export default App;