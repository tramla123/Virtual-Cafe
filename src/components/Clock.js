import React, {useEffect, useState} from 'react'


function Clock() {

    const [ClockState, setClockState] = useState();
    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            const dateWithSpace = date.toLocaleTimeString().split('').join(' ');
            setClockState(dateWithSpace)
        },);
    }, []);

  return (
    <div className='clock'>{ClockState}</div>
  )
}

export default Clock