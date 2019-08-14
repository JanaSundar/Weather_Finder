import React from 'react';
import 'bootswatch/dist/lux/bootstrap.css';
import Navbar from "./components/Navbar.js";
import Input from "./components/Input.js";


function App() {
  return (
    <React.Fragment>
        <Navbar/>
        <div className="container">
            <Input/>
        </div>

    </React.Fragment>
  );
}

export default App;
