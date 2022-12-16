import React, {useEffect} from "react";
import './App.css';
import {LandingPage} from "./landingpage/landingpage";
import AOS from "aos"
import "aos/dist/aos.css"
function App() {
  //aos
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
