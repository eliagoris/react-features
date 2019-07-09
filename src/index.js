import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount)

  return (
    <div>
      <p>The current count is {count}</p>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}

App.defaultProps = {
  initialCount: 0,
}

ReactDOM.render(<App initialCount={2} />, document.getElementById('root'))
