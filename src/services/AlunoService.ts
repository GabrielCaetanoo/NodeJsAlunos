import EmailService from "./EmailService";
import AlunoRepository from "../repositories/AlunoRepository";
import { IAluno } from "../models/Aluno";

const emailService = new EmailService();
const alunoRepository = new AlunoRepository();

class AlunoService {
    constructor() {
    }

    getAll(): IAluno[] {
        //Pede para o repository solicitar ao banco de dados todos os registros de alunos
        return alunoRepository.getAll();
    }

    getById(id: string): IAluno {
        //Pedir para o repository solicitar ao banco de dados o registro do usuario para que tenha o id que chegou a rota
        return alunoRepository.getById(id);
    }

    add(data: IAluno): IAluno {
        //Verificar se esse aluno já existe (Pedir informação para o repository)
        //Se já existir retornar erro
        //Se não existir solicitar que o repository (quem tem acesso ao banco de dados) faça inserção este aluno;
        emailService.sendEmailWelcomeAluno(data.email);
        //Enviar um e-mail para um aluno(Não colocar dentro do add)
        return alunoRepository.add(data);
    }

    update(id: string, data: IAluno ): IAluno{
        //Verificar se  esse aluno existe (repository)
        //Se não existir retornar erro
        //Se existir fazer alteração (repository)

       return alunoRepository.update(id, data);
    }

    delete(id: string): string {
        //Verificar se esse aluno existe (repository)
        //Se não existir retornar erro
        //Se existir fazer a exclusão (repository)
        return alunoRepository.delete(id);
    }
}

export default AlunoService;