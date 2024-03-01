import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbars from "./Componants/Navbars";
import OurHome from "./Componants/OurHome";
import MyCards from "./Componants/MyCards";
import NewArrivals from "./Componants/NewArrivals";
import OurFeatures from "./Componants/OurFeatures";
import OurBlogs from "./Componants/OurBlogs";
import OurClients from "./Componants/OurClients";
import OurFooter from "./Componants/OurFooter";
import OurEnd from "./Componants/OurEnd";
import OurCollection from "./Componants/OurCollection";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <Navbars />
      <OurHome />
      <MyCards />
      <NewArrivals />
      <OurCollection />
      <OurFeatures />
      <OurBlogs />
      <OurClients />
      <OurFooter />
      <OurEnd />
    </div>
  );
}
// npm i aos
export default App;
