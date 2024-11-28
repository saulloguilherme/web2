import evento from "../models/evento.js"


class EventoController {

    static async listarEventos (req, res){
        try {
            const listaEventos = await evento.find({});
            res.status(200).json(listaEventos);
        } catch (error) {
            res.status(500).json({message: `${error.message} - Erro interno no servidor`});
        }
    }

    static async listarEventoPorId (req, res){
        try {
            const id = req.params.id;
            const eventoEncontrado = await evento.findById(id);
            res.status(200).json(eventoEncontrado);
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha na requisição do evento`});
        }
    }

    static async cadastrarEvento (req, res){
        try {
            const novoEvento = await evento.create(req.body);
            res.status(201).json({message: "evento cadastrado com sucesso", evento: novoEvento});
        } catch (error) {
            res.status(500).json({message: `${error.message} - Falha ao cadastrar evento`});
        }
    }

    static async atualizarEvento (req, res){
        try {
            const id = req.params.id;
            await evento.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "evento atualizado com sucesso"});
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha na atualização`});
        }
    }

    static async excluirEvento (req, res){
        try {
            const id = req.params.id;
            await evento.findByIdAndDelete(id);
            res.status(200).json({message: "evento excluído com sucesso"});
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha na exclusão do evento`}); 
        }
    }

}

export default EventoController;