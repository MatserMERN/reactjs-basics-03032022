import React, {useState} from 'react'

function CounterHook() {
    const [count, setCount] = useState(0)

    const addCount = () =>{
        console.log('Buttin is clicked')
        setCount(count + 1)
    }

  return (
    <div className="container">
        <h1>Count : {count}</h1>
        <button className="btn btn-primary"
                onClick={() => addCount()}
        >Add Count</button>
    </div>
  )
}

export default CounterHook