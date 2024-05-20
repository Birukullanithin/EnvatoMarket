
import './App.css';
import Navbar from './components/nav';
import Navdown from './components/navdown';
import Image from "./components/image"
import Transfrom from "./components/transpose";
import Purchase from "./components/purchase";
import Box from './components/box';
import Support from "./components/support";
import Plugin from './components/plugin';
import Footerup from './components/footerup';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Navdown/>
      <Transfrom/>
      <Image/>
      <Purchase/>
      <Box/>
      <Support/>
      <Plugin/>
      <Footerup/>
      <Footer/>
    </div>
  );
}

export default App;
