import express from "express";
import cardapios from "./cardapioRoutes.js"
import tickets from "./ticketRoutes.js"
import usuarios from "./usuarioRoutes.js"

const routes = (app) => {
    app.use(express.json(), cardapios, tickets, usuarios);
}

export default routes