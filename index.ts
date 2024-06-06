import express, {Request, Response} from 'express';
import router from './routes';


const server = express();

server.use(express.urlencoded({extended: true}));

server.use(router);

server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({error: "Route not found"});    
})

const PORT = 4000;  // Porta especificada diretamente no código
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});