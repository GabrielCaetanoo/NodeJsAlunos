import { Request, Response } from "express";
import AlunoService from "../services/AlunoService";

const alunoService = new AlunoService();

class alunoController {
        constructor() {

        }
    
    getAll(Req: Request, Res: Response) {
        //Validar dados

        //Enviar dados para o Service

        const result = alunoService.getAll();
        Res.json(result);
        
    }

    getById(Req: Request, Res: Response) {
        const result = alunoService.getById(Req.params.id);
    }

    add(Req: Request, Res: Response) {
        //Validar Dados
        //Sanitizar Dados
        const result = alunoService.add(Req.body);
        Res.json(result);
    }

    update(Req: Request, Res: Response) {
        const result = alunoService.update(Req.params.id, Req.body);
        Res.json(result);
    
    }

    delete(Req: Request, Res: Response) {
        const result = alunoService.delete(Req.params.id);
        Res.json(result);
    }
      
}

export default alunoController; 