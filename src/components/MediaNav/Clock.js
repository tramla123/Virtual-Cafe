import React, {useEffect, useState} from 'react'


function Clock() {

    const [ClockState, setClockState] = useState();
    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString())
        },);
    }, []);

  return (
    <div className='clock'>{ClockState}</div>
  )
}

export default Clock