import React from 'react';

// Define a estrutura de um único participante
interface Participante {
  id: number;
  nome: string;
  idade: number;
}

// Define as propriedades que o componente receberá
interface ParticipantesProps {
  participantes: Participante[];
}

const Participantes: React.FC<ParticipantesProps> = ({ participantes }) => {
  return (
    <div>
      <h3>👥 Participantes Cadastrados ({participantes.length})</h3>
      {participantes.length === 0 ? (
        <p>Nenhum participante cadastrado ainda.</p>
      ) : (
        <ul>
          {participantes.map((p) => (
            <li 
              key={p.id} 
            >
              **{p.nome}** (Idade: {p.idade})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Participantes;