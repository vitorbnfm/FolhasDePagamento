import { Funcionario } from "./funcionario";

export interface Folha {
    id?: number;
    horatrabalhada: number;
    valorhora: number;
    mes: number;
    ano: number;
    funcionario?: Funcionario;
    funcionarioId: number;
    criadoem?: string;
}
