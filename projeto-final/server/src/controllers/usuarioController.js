import { usuario } from "../models/UsuarioModel.js"

class UsuarioController {

    static async listarTodos (req, res) {
        try {
            const listaUsuarios = await usuario.find({});
            res.status(200).json(listaUsuarios)
        } catch (erro) {
            res.status(500).json({message: `Falha na requisição. ${erro}`})
        }
    }
    static async cadastrarUsuario (req, res) {
        try {
            const novoUsuario = await usuario.create(req.body)
            res.status(201).json({message: "Objeto criado com sucesso", usuario: novoUsuario})
        } catch (erro) {
            res.status(500).json({message: `Falha na requisição. ${erro}`})
        }
    }
    static async atualizarUsuario (req, res) {
        try {
            const id = req.params.id;
            await usuario.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Objeto atualizado com sucesso."})
        } catch (erro) {
            res.status(500).json({message: `Falha na requisição. ${erro}`})
        }
    }
    static async excluirUsuario (req, res) {
        try {
            const id = req.params.id;
            await usuario.findByIdAndDelete(id);
            res.status(200).json({message : "Objeto excluído com sucesso."})
        } catch (erro) {
            res.status(500).json({message: `Falha na requisição. ${erro}`})
        }
    }
    
}

export default UsuarioController;