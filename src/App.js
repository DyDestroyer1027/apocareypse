import './App.css';
import Countdown from 'react-countdown';
import React from 'react'
import Snowfall from 'react-snowfall'
// Renderer for the countdown to ApoCareypse
function Card(props) {
  let card = 
  <div className="card">
    <div className="card-container">
      <h2><b>{props.name}</b></h2>
      <p>{props.description}</p>
    </div>
  </div>
  return card
}
const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {    
  let now = new Date()
  if (completed) {
    // Renders the duration state of the ApoCareypse
    return <Countdown date={new Date(new Date().getFullYear(), 11, 25)} renderer={durationRenderer}/>;
  } else {
    // Render a countdown
    return <span><b>The {now.getFullYear()} ApoCareypse begins in: </b><br/> <span id='days'>{days} Days,</span><span id='hours'> {hours} Hours, </span><span id='minutes'>{minutes} Minutes, </span><span id='seconds'>{seconds} Seconds.</span></span>;
  }
};
const durationRenderer = ({ days, hours, minutes, seconds, completed }) => {    
  let now = new Date()
  let year = now.getFullYear()
  if(now.getDate() > 24 && now.getMonth() === 11) year += 1
  if (completed) {
    // Render a completed state
    return <Countdown date={new Date(year, 11, 1)} renderer={countdownRenderer} />;
  } else {
    // Render a countdown till the end
    return <span><b>The {year} ApoCareypse has begun! </b><br/> It will conclude in: <br/><span id='days'>{days} Days,</span><span id='hours'> {hours} Hours, </span><span id='minutes'>{minutes} Minutes, </span><span id='seconds'>{seconds} Seconds.</span></span>;
  }
};
const tick = ({ days, hours, minutes, seconds}) => {
  //let now = new Date()
  console.log(days)
  console.log(hours)
  console.log(minutes)
  console.log(seconds)
  document.getElementById('seconds').classList.add('seconds')
}
function App() {
  return (
    <div className="app">
      <Snowfall />
        <div className='countdown-container'>
          <div className='countdown'>
            <div className="countdown-card">
              <div className="countdown-card-container">
                <Countdown date={new Date(new Date().getFullYear(), 11, 1)} renderer={countdownRenderer} onTick={tick}/>
              </div>
            </div>
          </div>
        </div>
      <div className='information-container'>
          <div className='information'> 
            <div className='cards'>
              <Card name='Objective' description='Last as long as possible without listening to All I Want For Christmas Is You (Mariah Carey)' />
              <Card name='Duration' description='The Game begins on the 1st of December, and concludes on December 25. '/>  
              <Card name='Rule 1' description='Only the original version of the song counts as losing, any remixes or covers are permitted.' />
              <Card name='Rule 2' description='Attempting to remove others from the game by sending them a link to the song, or playing it near them is allowed, but discouraged.' />
              <Card name='Losing' description='As soon as you recognize the song playing near you, you have lost the game.' />
              <Card name='Additional Information' description='This version of the game was adapted from Whamageddon.' />
            </div>
        </div>
      </div>
    </div>
  );
}
export default App;
