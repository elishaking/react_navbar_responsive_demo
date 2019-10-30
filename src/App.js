import React from 'react';
import './App.css';
import Navbar from 'react_navbar_responsive';


function App() {
  return (
    <div className="App">
      <Navbar
        links={[
          {
            to: "/home",
            text: "Home"
          },
          {
            html: (<li><a href="/about">About</a></li>)
          },
          {
            to: "/contact",
            text: "Contact"
          }
        ]} />
    </div>
  );
}

export default App;
