import './App.css';
import Countdown from 'react-countdown';
import React from 'react'
import Snowfall from 'react-snowfall'
import ReactHtmlParser from 'react-html-parser'
import { SocialIcon } from 'react-social-icons';
// Timer text component
function Timer(props) {
  let text = 
    <span> 
      <span className='days-container'>
        <span className='days'>{props.days}</span> Days, </span>
      <span className='hours-container'>
        <span className='hours'>{props.hours}</span> Hours, </span>
      <span className='minutes-container'>
        <span className='minutes'>{props.minutes}</span> Minute{props.minutes === 1 ? '': 's'}, </span>
      <span className='seconds-container'>
        <span className='seconds'>{props.seconds}</span> Seconds </span>
    </span>
  return text
}
// Card Component
function Card(props) {
  let card = 
  <div className="card">
    <div className="card-container">
      <h2><b>{props.name}</b></h2>
      <p>{ ReactHtmlParser(props.description) }</p>
    </div>
  </div>
  return card
}
// Renderer for the countdown to ApoCareypse
const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {    
  let now = new Date()
  if (completed) {
    // Renders the duration state of the ApoCareypse
    return <Countdown date={new Date(new Date().getFullYear(), 11, 25)} renderer={durationRenderer}/>;
  } else {
    // Render a countdown
    return <span className='countdown-text'><b>The {now.getFullYear()} ApoCareypse begins in: </b><br/> <Timer days={days} hours={hours} minutes={minutes} seconds={seconds}/> </span>;
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
    return <span className='countdown-text'><b>The {year} ApoCareypse has begun! </b><br/> It will conclude in: <br/><Timer days={days} hours={hours} minutes={minutes} seconds={seconds}/></span>;
  }
};
function App() {
  return (
    <div className="app">
      <Snowfall />
      <div className='social-icons-container'>
        <SocialIcon url="https://github.com/dydestroyer1027/apocareypse" bgColor="#5E81AC" style={{ height: '4rem', width: '4rem' }} className='github-social-icon'/>
      </div>
        <div className='countdown'>
          <div className="countdown-card">
            <div className="countdown-card-container">
              <Countdown date={new Date(new Date().getFullYear(), 11, 1)} renderer={countdownRenderer}/>
            </div>
          </div>
        </div>
      <div className='information-container'>
          <div className='information'> 
            <div className='cards'>
              <Card name='Objective' description='Last as long as possible without listening to <a href=https://www.youtube.com/watch?v=aAkMkVFwAoo>All I Want For Christmas Is You</a>' />
              <Card name='Duration' description='The Game begins on the 1st of December, and concludes on December 25th. '/>  
              <Card name='Rule 1' description='Only the original version of the song counts as losing, any remixes or covers are permitted.' />
              <Card name='Rule 2' description='Attempting to remove others from the game by sending them a link to the song, or playing it near them is allowed, but discouraged.' />
              <Card name='Losing' description='As soon as you recognize the song playing near you, you have lost the game.' />
              <Card name='Additional Information' description='This version of the game was adapted from <a href=https://en.wikipedia.org/wiki/Whamageddon>Whamageddon</a>.' />
            </div>
        </div>
      </div>
    </div>
  );
}
export default App;