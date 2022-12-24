import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Stores from "./pages/Stores/Stores";
import PictureGallery from "./pages/PictureGallery/PictureGallery";
import News from "./pages/News/News";
import Careers from "./pages/Careers/Careers";
import ContactUs from "./pages/ContactUs/ContactUs";
import LadiesFashion from "./pages/Activities/LadiesFashion";
import KidsFashion from "./pages/Activities/KidsFashion";
import MensFashion from "./pages/Activities/MensFashion";
import Watches from "./pages/Activities/Watches";
import RucolineShoes from "./pages/Activities/RucolineShoes";
import Footer from './components/Footer/Footer';
import MouseComponent from './components/MouseComponent.js/MouseComponent';


function App() {

  return (
    <div className="App">
      <Navbar />
      <MouseComponent/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="stores" element={<Stores />} />
        <Route path="ladiesFashion" element={<LadiesFashion />} />
        <Route path="kidsFashion" element={<KidsFashion />} />
        <Route path="mensFashion" element={<MensFashion />} />
        <Route path="watches" element={<Watches />} />
        <Route path="rucolineShoes" element={<RucolineShoes />} />
        <Route path="stores" element={<Stores />} />
        <Route path="pictureGallery" element={<PictureGallery />} />
        <Route path="news" element={<News />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
