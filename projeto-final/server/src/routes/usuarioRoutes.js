import express from "express";
import UsuarioController from "../controllers/usuarioController.js"
const routes = express.Router();

routes.get("/usuario", UsuarioController.listarTodos);
routes.post("/usuario", UsuarioController.cadastrarUsuario);
routes.put("/usuario/:id", UsuarioController.atualizarUsuario);
routes.delete("/usuario/:id", UsuarioController.excluirUsuario);

export default routes;