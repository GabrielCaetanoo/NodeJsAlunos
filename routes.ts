import { Router, Request, Response } from "express";
import AlunoControllers from "./src/controllers/AlunoControllers";

const router = Router();

const alunoControllers = new AlunoControllers();

router.get('/', );

router.get('/aluno', alunoControllers.getAll); //Buscar todos alunos
router.get('/alunos/id:', alunoControllers.getById ); // Buscar por um Aluno
router.post('/aluno', alunoControllers.add); //Adicionar um ALuno
router.put('/aluno/:id', alunoControllers.update); //Editar aluno
router.delete('/aluno/:id', alunoControllers.delete); //Excluir aluno

export default router;