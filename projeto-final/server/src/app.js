import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';
import routes from './routes/index.js';
import cors from "cors";


const conexao = await conectaNaDatabase();

conexao.on("error", (err) => {
    console.log("Erro na conexão com o banco de dados.", err);
});

conexao.once("open", () =>{
    console.log("Conexão com o banco de dados feita com sucesso.");
})

const corsOptions = {
    origin: 'http://localhost:8081',
    optionsSuccessStatus: 200
};


const app = express();
app.use(cors(corsOptions));
routes(app);

export default app;