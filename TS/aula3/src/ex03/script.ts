let tarefa = document.getElementById('task') as HTMLInputElement
const addTas = document.getElementById('addTask') as HTMLButtonElement;
const taskList = document.getElementById('taskList') as HTMLUListElement;

function addTask(): void {
    const taskText = tarefa.value.trim();

    if (taskText === '') {
        alert('Por favor, digite uma tarefa!');
        return;
    }

    // Cria o elemento da lista (li)
    const li = document.createElement('li');
    li.className = 'task-item';

    // Cria o texto da tarefa (span)
    const textSpan = document.createElement('span');
    textSpan.className = 'task-text';
    textSpan.textContent = taskText;
    
    // Adiciona funcionalidade de "concluir" (toggle 'completed' class)
    textSpan.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Cria o botão de remover
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = 'Remover';

    // Adiciona funcionalidade de remover a tarefa
    removeBtn.addEventListener('click', () => {
        taskList.removeChild(li);
        // Opcional: Atualizar o estado do botão 'Limpar Concluídas' (se houver)
    });
    
    // Monta o elemento li
    li.appendChild(textSpan);
    li.appendChild(removeBtn);

    // Adiciona à lista principal
    taskList.appendChild(li);

    // Limpa o campo de input
    tarefa.value = '';
}

addTask.addEventListener('click', addTask);
