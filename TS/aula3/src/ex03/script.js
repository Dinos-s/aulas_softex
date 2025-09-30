var tarefa = document.getElementById('task');
var addTas = document.getElementById('addTask');
var taskList = document.getElementById('taskList');
function addTask() {
    var taskText = tarefa.value.trim();
    if (taskText === '') {
        alert('Por favor, digite uma tarefa!');
        return;
    }
    // Cria o elemento da lista (li)
    var li = document.createElement('li');
    li.className = 'task-item';
    // Cria o texto da tarefa (span)
    var textSpan = document.createElement('span');
    textSpan.className = 'task-text';
    textSpan.textContent = taskText;
    // Adiciona funcionalidade de "concluir" (toggle 'completed' class)
    textSpan.addEventListener('click', function () {
        li.classList.toggle('completed');
    });
    // Cria o botão de remover
    var removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = 'Remover';
    // Adiciona funcionalidade de remover a tarefa
    removeBtn.addEventListener('click', function () {
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
