import express from "express";
import CardapioController from "../controllers/cardapioController.js"
const routes = express.Router();

routes.get("/cardapio", CardapioController.listarTodos);
routes.get("/cardapio/:dia", CardapioController.listarPorDia)
routes.get("/cardapio/semana", CardapioController.listarTodosDaSemana);
routes.post("/cardapio", CardapioController.cadastrarCardapio);
routes.put("/cardapio/:id", CardapioController.atualizarCardapio);
routes.delete("/cardapio/:id", CardapioController.excluirCardapio);

export default routes;