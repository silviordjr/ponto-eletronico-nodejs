import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import criarRegistro from './endpoints/criarRegistro';
import validarRegistro from './endpoints/validarRegistro';
import pegarRegistros from './endpoints/pegarRegistros';
import pegarUser from './endpoints/pegarUser';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post('/registrar', criarRegistro)
app.put(`/validar/:id`, validarRegistro)
app.get('/registros', pegarRegistros)
app.get(`/registros/:id`, pegarUser)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});