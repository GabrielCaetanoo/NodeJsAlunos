export interface IAluno {
    name: string;
    email: string;
    phone: string;
    password: string; //Não recomendado salvar senha no banco de dados
    cpf: string;
}