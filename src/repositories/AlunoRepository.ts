import { IAluno } from "../models/Aluno";

class AlunoRepository {
    constructor() {
    
    }

    getAll(): IAluno[] {
        //Solicitar ao banco de dados que busque todos os alunos
        return [{name: "Gabriel", email: "contato@gmail.com", phone: "12312312", password: "12312344", cpf: "123123123"}]
    }

    getById(id: string): IAluno {
        //Solicitar ao banco de dados que busque um aluno pelo ID
        return {name: "Gabriel", email: "contato@gmail.com", phone: "12312312", password: "12312344", cpf: "123123123"}
    }

    add(data: IAluno): IAluno {
        //Solicitar ao banco de dados que adicione um usuario
        return data;
    }

    update(id: string, data: IAluno): IAluno {
        //Solicitar ao banco de dados que atualize um usuario pelo ID
        return data;
    }

    delete(id: string) {
        //Solicitar ao banco de dados que exclua um usuario
        return id;
    }
}

export default AlunoRepository;