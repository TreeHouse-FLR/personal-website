//Module Imports
import React from 'react';

//Custom Imports
import Clock from './components/clock/Clock';
import Globe from './components/globe/Globe';

//Style Imports
import './App.css';

function App() {
  const [background, setBackground] = React.useState("light");
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    //Polling current hour every second
    const interval = setInterval(() => {
      let currTime = new Date();

      //MIL Time
      setTime(currTime);      
      let currHour = currTime.getHours(); 
      const wrapper = document.getElementById("body")
  
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
    <div className="App">
      <Clock time={time.toLocaleTimeString()}/>
      <Globe />
    </div>
  );
}

export default App;
