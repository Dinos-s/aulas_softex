import { useState } from "react";

function Form() {
    const [name, setName] = useState('')
    const [idade, setIdade] = useState(0)

    const cadastrar = (event) => {
        event.preventDefault();
    }

    const limpar = () => {
        setName('')
        setIdade(0)
    }

    return(
        <>
            <form action="" onSubmit={cadastrar}>
                <label htmlFor="">Insira o seu nome</label>
                <input value={name} type="text" onChange={(e) => setName(e.target.value)}/>
                <label htmlFor="">Informe a sua idade</label>
                <input value={idade} type="number" onChange={(e) => setIdade(e.target.value)}/>

                <button type="submit">Cadastrar</button>
                <button onClick={limpar}>Limpar</button>
            </form>
        </>
    )
}

export default Form;