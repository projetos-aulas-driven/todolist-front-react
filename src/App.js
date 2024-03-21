import { useState } from "react";
import logo from "./images/logo.png";

export default function App() {
    const [tarefas, setTarefas] = useState(["Jogar Lolzinho", "Assistir Narutinho"]);
    const [terminadas, setTerminadas] = useState([]);

    function adicionarTarefa() {
        const novaTarefa = prompt("Digite sua tarefa");
        const novasTarefas = [...tarefas, novaTarefa];
        setTarefas(novasTarefas);
    }

    function terminarTarefa(tarefaTerminada) {
        const novoArray = [...terminadas, tarefaTerminada];
        setTerminadas(novoArray);

        if (tarefas.length - novoArray.length > 0) {
            alert(`Agora só faltam ${tarefas.length - novoArray.length} tarefas! Uhuul!`);
        } else {
            alert("Você terminou tudo, parabéns!");
        }

    }

    return (
        <div className="conteudo">
            <img src={logo} alt="logo" />

            <div className="adicionar-tarefa">
                <input type="text" placeholder="Digite a tarefa..." />
                <button onClick={adicionarTarefa} className="botao-adicionar">+</button>
            </div>

            <ul className="lista-tarefas">
                {tarefas.map((tarefa, index) => (
                    <li
                        className={`tarefa ${terminadas.includes(tarefa) ? "finalizada" : ""} `}
                        key={index}
                        onClick={() => terminarTarefa(tarefa)}
                    >
                        <ion-icon name={terminadas.includes(tarefa) ? "checkmark-circle" : "ellipse-outline"}></ion-icon>
                        {tarefa}
                    </li>
                ))}
            </ul>
        </div>
    )
}