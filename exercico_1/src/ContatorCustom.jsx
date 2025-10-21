import { useState } from "react"
import './Custom.css' // Importa o CSS simples

function ContadorCustomizado() {
    const [count, setCount] = useState(0)
    // Renomeando a variável de estado para 'incrementoValue' para evitar conflito com a função 'incremento'
    const [increment, setIncrement] = useState(1) 

    // O nome da função está bom, mas a variável 'event' estava incorreta.
    const handleIncrementChange = (event) => {
        // Correção: Acessar a propriedade .value e converter para número
        const novoValor = Number(event.target.value) 

        if (!isNaN(novoValor)) {
            setIncrement(novoValor)
        }
    }

    const soma = () => {
        setCount(c => c + increment)
    }

    const subtrair = () => {
        setCount(c => c - increment)
    }

    const zerar = () => {
        setCount(0)
    }

    return (
        // CORREÇÃO 1: Usar os nomes das classes diretamente
        <main className="mainContainer"> 
            <div className="card">
                <h1>Contador Flexível</h1>

                <p className="countText"> {count} </p>

                <div className="inputGroup">
                    <label htmlFor="incremento">Valor do Incremento/Decremento:</label>
                    <input 
                        id="incremento" 
                        type="number" 
                        // CORREÇÃO 2: Usar o estado 'increment' no valor
                        value={increment} 
                        // Usar a função de handler corrigida
                        onChange={handleIncrementChange} 
                        // CORREÇÃO 1: Usar o nome da classe diretamente
                        className="input" 
                        min="0" 
                    />
                </div>

                <div className="buttonGroup">

                    {/* CORREÇÃO 1: Usar classes diretamente. Espaços separam múltiplas classes */}
                    <button onClick={subtrair} className="button subtrairButton"> Subtrair </button>

                    <button onClick={soma} className="button somarButton"> Somar </button>

                    {count !== 0 && (
                        <button onClick={zerar} className="button zerarButton"> Zerar </button>
                    )}
                </div>
            </div>
        </main>
    )
}

export default ContadorCustomizado