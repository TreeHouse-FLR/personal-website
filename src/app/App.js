//Module Imports
import { AppBar } from '@mui/material';
import React from 'react';

//Custom Imports

//Style Imports
import './App.css';

function App() {
  const [background, setBackground] = React.useState("light")

  React.useEffect(() => {
    //Polling current hour every second
    const interval = setInterval(() => {
      //MIL Time
      let currHour = new Date().getHours(); 

      currHour = 18;

      const wrapper = document.getElementById("appWrapper")

      //set background animattion based on hour
      if ((18 <= currHour || currHour <= 6) && background !== "dark") {
        setBackground("dark")
        wrapper.classList.remove('App__darkToLight-animate');
        wrapper.classList.add('App__lightToDark-animate')
      } else if ((7 > currHour && currHour < 17) && background !== "light") {
        setBackground("light")
        wrapper.classList.remove('App__lightToDark-animate')
        wrapper.classList.add('App__darkToLight-animate');
      }
    }, 1000);

    return () => clearInterval(interval)
  }, [background])
  

  return (
    <div id="appWrapper" className="App">
      hello
    </div>
  );
}

export default App;
