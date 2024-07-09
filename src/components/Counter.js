import React from 'react'

export function Counter(){
    const [count,setcount]=React.useState(0);
  return (
    <div>
      <h1>Counter Value is {count}</h1>
      <button  className="btn increase"onClick={() => setcount(count+1)}>Increase</button>
      <button  className="btn increase"onClick={() => count>0 && setcount(count-1)}>Decrease</button>
    </div>
  )
}


