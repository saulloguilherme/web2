import express from "express";
import participantes from "./participantesRoutes.js";
import eventos from "./eventosRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) =>
        res.status(200).send('Bem vindo ao node.js'));
    app.use(express.json(), participantes);
    app.use(express.json, eventos)
}

export default routes