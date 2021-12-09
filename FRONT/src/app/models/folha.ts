import { Funcionario } from "./funcionario";

export interface Folha {
    id?: number;
    horaTrabalhada: number;
    valorHora: number;
    mes: number;
    ano: number;
    funcionario?: Funcionario;
    funcionarioId: number;
    criadoem?: string;
}
