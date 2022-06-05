import React, {useContext} from 'react'
import Button from './components/Button';
import SetPomodoro from "./components/SetPomodoro";
import {SettingContext} from './Context/SettingContext';
import CountDownAnimation from './components/CountdownAnimation'
function App() {

  const {
    pomodoro, 
    executing, 
    setCurrentTimer, 
    settingButton, 
    children,
    startAnimate,
    startTimer,
    pauseTimer} = useContext(SettingContext);

  return (
    <div className="container">
      <h1>Pomodoro</h1>
      <small>Be Productive the right way</small> 
        {pomodoro !== 0 ?
          <SetPomodoro /> :
          <>
            <ul className='labels'>
              <li>
                <Button
                title='Work'
                activeClass={executing.active === 'work' && 'active-label'}
                _callBack={() => setCurrentTimer('work')}
                >
                </Button>
                <Button
                title='Short Break'
                activeClass={executing.active === 'short' && 'active-label'}
                _callBack={() => setCurrentTimer('short')}
                >
                </Button>
                <Button
                title='Long Break'
                activeClass={executing.active === 'long' && 'active-label'}
                _callBack={() => setCurrentTimer('long')}
                >
                </Button>
              </li>
            </ul>
            <Button
            title='Settings'
            _callBack={settingButton}
            />
            <div className='time-container'>
              <div className='time-wrapper'>
                <CountDownAnimation
                key={pomodoro}
                timer={pomodoro}
                animate={startAnimate}
                >
                  {children}
                </CountDownAnimation>
              </div>
            </div>
            <div className='button-wrapper'>
              <Button title='start' className={!startAnimate && 'active'} _callBack={startTimer}/>
              <Button title='Pause' className={startAnimate && 'active'} _callBack={pauseTimer}/>
            </div>

          </> 
        }    
    </div>
  );
}

export default App;
