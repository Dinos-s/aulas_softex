import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [nome, setNome] = useState('')

  const inputRef = useRef(null);

  const showName = () => {
    let nomeD = inputRef.current.value.trim()
    if (!nomeD) {
      alert('Por favor insira um nome')
      return
    }
    setNome(nomeD)
  }

  const clearName = () => {
    setNome('')
    if (inputRef.current) {
        inputRef.current.value = ''; 
    }
  }

  return (
    <div className='container'>
      <label>Nome</label>
      <input className='form-input' type="text" name='nome' ref={inputRef} placeholder='Digite seu nome'/>
      <button onClick={showName} className='btn prima'>Entrar</button>
      <button onClick={clearName} className='btn seco'>Sair</button>

      {nome && <h1 className='msg'>Olá, {nome}!</h1>}
    </div>
  )
}

export default App
