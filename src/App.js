import logo from "./images/logo.png";

export default function App() {
    return (
        <div className="conteudo">
            <img src={logo} alt="logo" />

            <div className="adicionar-tarefa">
                <input type="text" placeholder="Digite a tarefa..." />
                <button className="botao-adicionar">+</button>
            </div>

            <ul className="lista-tarefas">
                <li className={`tarefa`}>
                    <ion-icon name="ellipse-outline"></ion-icon>
                    Jogar Lolzinho
                </li>
                <li className={`tarefa`}>
                    <ion-icon name="ellipse-outline"></ion-icon>
                    Assistir Narutinho
                </li>
                <li className={`tarefa`}>
                    <ion-icon name="ellipse-outline"></ion-icon>
                    Comprar cafezinho
                </li>
            </ul>
        </div>
    )
}