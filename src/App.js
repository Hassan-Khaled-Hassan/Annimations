import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])

  return (
    <div className="App">
      <h1>welcome</h1>
      <div className="animation" data-aos="fade-up"></div>
      <div className="animation" data-aos="fade-down"></div>
      <div className="animation" data-aos="fade-right"></div>
      <div className="animation" data-aos="fade-left"></div>
      <div className="animation" data-aos="zoom-in"></div>
      <div className="animation" data-aos="zoom-out"></div>
      <div className="animation" data-aos="flip-right"></div>
    </div>
  );}

export default App;
