import EmailService from "./EmailService";

const emailService = new EmailService();

class AlunoService {
    constructor() {
    }

    getAll() {
        //Pede para o repository solicitar ao banco de dados todos os registros de alunos
    }

    getById(id: string) {
        //Pedir para o repository solicitar ao banco de dados o registro do usuario para que tenha o id que chegou a rota
    
    }

    add(data: any) {
        //Verificar se esse aluno já existe (Pedir informação para o repository)
        //Se já existir retornar erro
        //Se não existir solicitar que o repository (quem tem acesso ao banco de dados) faça inserção este aluno;
        emailService.sendEmailWelcomeAluno();
        //Enviar um e-mail para um aluno(Não colocar dentro do add)
    }

    update(id: string) {
        //Verificar se  esse aluno existe (repository)
        //Se não existir retornar erro
        //Se existir fazer alteração (repository)
    }

    delete(id?: string) {
        //Verificar se esse aluno existe (repository)
        //Se não existir retornar erro
        //Se existir fazer a exclusão (repository)
    }
}

export default AlunoService;