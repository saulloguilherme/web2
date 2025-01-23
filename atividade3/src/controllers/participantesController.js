import { participante } from "../models/participante.js";

class participanteController {

    static async listarParticipantes(req, res) {
        try {
            const listarParticipantes = await participante.find({});
            res.status(200).json(listarParticipantes);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` })
        }
    };

    static async listarParticipantePorId(req, res) {
        try {
            const id = req.params.id;
            const participanteEncontrado = await participante.findById(id);
            res.status(200).json(participanteEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do participante` })
        }
    };

    static async cadastrarParticipante(req, res) {
        try {
            const novoParticipante = await participante.create(req.body);
            res.status(201).json({message: "criado com sucesso", participante: novoParticipante});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar participante` })
        }
    };

    static async atualizarParticipante (req, res){
        try{
            const id = req.params.id;
            await participante.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "participante atualizado"});
        } catch (erro){
            res.status(500).json({message: `${erro.message} - falha na atualização`})
        }
    };

    static async excluirParticipante (req, res){
        try{
            const id = req.params.id;
            await participante.findByIdAndDelete(id);
            res.status(200).json ({message: "Autor excluido com sucesso"});
        } catch (erro){
            res.status(500).json({message: `${erro.message} - falha na exclusão`});
        }
    }
}

export default participanteController;