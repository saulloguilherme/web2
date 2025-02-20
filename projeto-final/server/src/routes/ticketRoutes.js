import express from "express";
import TicketController from "../controllers/ticketController.js";
const routes = express.Router();

routes.get("/ticket", TicketController.listarTodos);
routes.get("/ticket/:dia", TicketController.listarPorDia);
routes.post("/ticket", TicketController.cadastrarTicket);
routes.put("/ticket/:id", TicketController.atualizarTicket);
routes.delete("/ticket/:id", TicketController.excluirTicket);

export default routes;