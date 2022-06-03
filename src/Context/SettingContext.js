import React, { createContext, useState } from 'react'

export const SettingContext = createContext();
const SettingContextProvider = (props) => {

    const [pomodoro, setPomodoro] = useState(0);
    const [executing, setExecuting] = useState({});
    const [startAnimate, setStartAnimate]  = useState(false);

    const setCurrentTimer = (active_state) => {
        updateExecute({
            ...executing,
            active: active_state
        })
        setTimerTime(executing)
    }

    const startTimer = () => {
        setStartAnimate(true);
    }

    const pauseTimer = () => {
        setStartAnimate(false);
    }

    const stopTimer = () => {
        setStartAnimate(false);
    }

    const settingButton = () => {
        setExecuting({});
        setPomodoro(0);
    }

    const updateExecute = (updateSettings) => {
        setExecuting(updateSettings);
        setTimerTime(updateSettings);
    }

    const setTimerTime = (evaluate) => {
        switch (evaluate.work) {
            case 'work':
                setPomodoro(evaluate.work);
                break;
            case 'short':
                    setPomodoro(evaluate.short);
                break;
            case 'long':
                    setPomodoro(evaluate.long);
                break;    
            default:
                    setPomodoro(0);
                break;
        }
    }

    const children = ({remaingTimer}) => {
        const minutes = Math.floor(remaingTimer / 60 );
        const seconds = remaingTimer % 60;

        return `${minutes} ${seconds}`
    }

  return (
    <SettingContext.Provider value={{
        stopTimer, 
        updateExecute,
        pomodoro,
        executing,
        startAnimate,
        startTimer,
        pauseTimer,
        settingButton,
        setCurrentTimer,
        updateExecute,
        children
        }}>
        {props.children}
    </SettingContext.Provider>
  )
}

export default SettingContextProvider;