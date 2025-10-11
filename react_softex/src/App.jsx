import { useState } from "react"
import "./App.css";

export default function App() {

  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  return (
    <>
      <h1>Hello, world!</h1>
      <div className="card">
        <button onClick={increment}>Incrementa: {count}</button>
      </div>
    </>
  )
}