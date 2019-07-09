import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = ({ initialCount, initialText }) => {
  const [state, setState] = useState({ count: initialCount, text: initialText })

  return (
    <div>
      <p>
        The current {state.text} is {state.count}
      </p>
      <button onClick={() => setState({ count: state.count - 1 })}>-1</button>
      <button onClick={() => setState({ count: initialCount })}>reset</button>
      <button onClick={() => setState({ count: state.count + 1 })}>+1</button>

      <input value={state.text} onChange={e => setState({ text: e.target.value })} />
    </div>
  )
}

// const App = ({ initialCount, initialText }) => {
//   const [count, setCount] = useState(initialCount)
//   const [text, setText] = useState(initialText)

//   return (
//     <div>
//       <p>
//         The current {text} is {count}
//       </p>
//       <button onClick={() => setCount(count - 1)}>-1</button>
//       <button onClick={() => setCount(0)}>reset</button>
//       <button onClick={() => setCount(count + 1)}>+1</button>

//       <input value={text} onChange={e => setText(e.target.value)} />
//     </div>
//   )
// }

App.defaultProps = {
  initialCount: 0,
  initialText: 'count',
}

ReactDOM.render(<App initialCount={2} />, document.getElementById('root'))
