export default function AdicionarTarefas({tarefas, setTarefas}) {
    
    function adicionarTarefa() {
        const novaTarefa = prompt("Digite sua tarefa");
        const novasTarefas = [...tarefas, novaTarefa];
        setTarefas(novasTarefas);
    }

    return (
        <div className="adicionar-tarefa">
            <input type="text" placeholder="Digite a tarefa..." />
            <button onClick={adicionarTarefa} className="botao-adicionar">+</button>
        </div>
    );
}