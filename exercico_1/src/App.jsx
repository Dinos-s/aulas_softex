import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="contador-container">
      <div className="contador-card">
        <h1>Contador de Cliques</h1>
        <p>Você clicou <strong>{count}</strong> vez(es).</p>
        <button
          onClick={() => setCount(c => c + 1)}
          className="contador-botao"
        >
          Clique aqui
        </button>
        {count > 0 && (
          <button
            onClick={() => setCount(0)}
            className="contador-botao contador-botao-zerar"
          >
            Zerar
          </button>
        )}
      </div>
    </main>

  )
}

export default App
