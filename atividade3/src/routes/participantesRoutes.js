import express from "express";
import participantesController from "../controllers/participantesController.js";

const routes = express.Router();

routes.get("/participantes", participantesController.listarParticipantes);
routes.get("/participantes/:id", participantesController.listarParticipantePorId);
routes.post("/participantes", participantesController.cadastrarParticipante);
routes.put("/participantes/:id", participantesController.atualizarParticipante);
routes.delete("/participantes/:id", participantesController.excluirParticipante);

export default routes;