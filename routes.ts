import { Router, Request, Response, NextFunction } from "express";
import AlunoController from "./src/controllers/AlunoControllers";

const router = Router();

const alunoController = new AlunoController();

const authMiddleware = (Req: Request, Res: Response , next: NextFunction) => {
    //Executar as Verificações necessárias
      if(Req.headers.authorization) {
      // Validar o token para identificar a existencia do usúario
      next();
      }else{
         return new Error('Usúario não autenticado!');
      }
  };

router.get('/', );

router.get('/aluno', authMiddleware, alunoController.getAll); //Buscar todos alunos
router.get('/alunos/:id', alunoController.getById ); // Buscar por um Aluno
router.post('/aluno', alunoController.add); //Adicionar um ALuno
router.put('/aluno/:id', alunoController.update); //Editar aluno
router.delete('/aluno/:id', alunoController.delete); //Excluir aluno

export default router;