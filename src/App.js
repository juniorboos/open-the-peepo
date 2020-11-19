import "./App.css";
import React, { useState } from "react";

function App() {
   const [open, setOpen] = useState(false);

   return (
      <div className="App">
         <div className={open ? "up activate-open-up" : "up"}>
            <div className="triangle"></div>
            <div className="block"></div>
         </div>
         <div className={open ? "down activate-open-down" : "down"}>
            <div className="block"></div>
            <div className="triangle"></div>
         </div>
         <button className="button" onClick={() => setOpen(!open)}>
            Activate
         </button>
      </div>
   );
}

export default App;
