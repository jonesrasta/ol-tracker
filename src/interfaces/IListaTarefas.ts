import IProjeto from "./IProjeto";

export default interface IListaTarefas {
    duracaoEmSegundos: number,
    descricao: string,
    projeto: IProjeto
}