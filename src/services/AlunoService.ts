import EmailService from "./EmailService";
import { IAluno } from "../models/Aluno";

const emailService = new EmailService();


class AlunoService {
    constructor() {
    }

    getAll(): IAluno[] {
        //Pede para o repository solicitar ao banco de dados todos os registros de alunos
        return [{name: "Gabriel", email: "contato@gmail.com", phone: "12312312", password: "12312344", cpf: "123123123"}]
    }

    getById(id: string): IAluno {
        //Pedir para o repository solicitar ao banco de dados o registro do usuario para que tenha o id que chegou a rota
        return {name: "Gabriel", email: "contato@gmail.com", phone: "12312312", password: "12312344", cpf: "123123123"}
    }

    add(data: IAluno): IAluno {
        //Verificar se esse aluno já existe (Pedir informação para o repository)
        //Se já existir retornar erro
        //Se não existir solicitar que o repository (quem tem acesso ao banco de dados) faça inserção este aluno;
        emailService.sendEmailWelcomeAluno(data.email);
        //Enviar um e-mail para um aluno(Não colocar dentro do add)
        return data;
    }

    update(id: string): IAluno{
        //Verificar se  esse aluno existe (repository)
        //Se não existir retornar erro
        //Se existir fazer alteração (repository)

        return {name: "Gabriel", email: "contato@gmail.com", phone: "12312312", password: "12312344", cpf: "123123123"}
    }

    delete(id?: string): IAluno {
        //Verificar se esse aluno existe (repository)
        //Se não existir retornar erro
        //Se existir fazer a exclusão (repository)
        return {name: "Gabriel", email: "contato@gmail.com", phone: "12312312", password: "12312344", cpf: "123123123"}
    }
}

export default AlunoService;