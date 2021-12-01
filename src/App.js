import './App.css';
import Countdown from 'react-countdown';


// Renderer for the countdown to ApoCareypse
const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {    
  let now = new Date()
  if (completed) {
    // Renders the duration state of the ApoCareypse
    return <Countdown date={new Date(new Date().getFullYear(), 11, 25)} renderer={durationRenderer}/>;
  } else {
    // Render a countdown
    return <span>The {now.getFullYear()} ApoCareypse begins in: <br/> {days} Days, {hours} Hours, {minutes} Minutes, {seconds} Seconds.</span>;
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
    return <span>The {year} ApoCareypse has begun! <br/> It will conclude in: <br/> {days} Days, {hours} Hours, {minutes} Minutes, {seconds} Seconds.</span>;
  }
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='Content'>
          <Countdown date={new Date(new Date().getFullYear(), 11, 1)} renderer={countdownRenderer} />
          <p>
          Your Objective: Last as long as possible without listening to <a href='https://www.youtube.com/watch?v=aAkMkVFwAoo'>All I Want For Christmas Is You</a> (Mariah Carey)
          <br/>Rules of the Game:
          <ol>
            <li>The Game begins on the 1st of December, and concludes on December 25. <br/>If you are unable to locate a timekeeping device, the countdown above may be of some use to you.</li><br/>
            <li>Only the <b>Original</b> version of the song counts as losing, any remixes or covers are permitted.</li><br/>
            <li>You lose the game as soon as you recognize the song.</li><br/>
            <li>Attempting to get others out of the game by sending them the link to the song and having them play it is permitted.</li><br/>
            <li>Playing the song near others to remove them from the game in the <b>physical</b> world should be avoided.</li><br/>
          </ol>
          Additional Information: This version of the game was adapted from <a href='https://en.wikipedia.org/wiki/Whamageddon'>Whamageddon</a>, and neither game is my idea.
          <br/>(This page is a work in progress)
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
