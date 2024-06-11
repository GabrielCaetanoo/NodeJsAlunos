import { Router, Request, Response } from "express";
import AlunoController from "./src/controllers/AlunoControllers";

const router = Router();

const alunoController = new AlunoController();

router.get('/', );

router.get('/aluno', alunoController.getAll); //Buscar todos alunos
router.get('/alunos/:id', alunoController.getById ); // Buscar por um Aluno
router.post('/aluno', alunoController.add); //Adicionar um ALuno
router.put('/aluno/:id', alunoController.update); //Editar aluno
router.delete('/aluno/:id', alunoController.delete); //Excluir aluno

export default router;