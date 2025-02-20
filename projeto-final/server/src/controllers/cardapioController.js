import { cardapio } from "../models/CardapioModel.js"

class CardapioController {

    static async listarTodos (req, res) {
        try {
            const listaCardapios = await cardapio.find({});
            res.status(200).json(listaCardapios)
        } catch (erro) {
            res.status(500).json({message: `Falha na requisição. ${erro}`})
        }
    }

    static async listarPorDia(req, res) {
        try {
            const { dia } = req.params;
            const dataInicio = new Date(dia);
            const dataFim = new Date(dataInicio);
            dataFim.setDate(dataFim.getDate() + 1);

            const listaCardapios = await cardapio.find({data: {$gte: dataInicio,$lt: dataFim,},});

            res.status(200).json(listaCardapios);
        } catch (erro) {
            res.status(500).json({ message: `Falha na requisição. ${erro}` });
        }
    }

    static async listarTodosDaSemana(req, res) {
        try {
            const hoje = new Date();
            const diaDaSemana = hoje.getDay();

            const dataInicio = new Date(hoje);
            dataInicio.setDate(hoje.getDate() - (diaDaSemana - 1));
            dataInicio.setHours(0, 0, 0, 0); 

            const dataFim = new Date(dataInicio);
            dataFim.setDate(dataInicio.getDate() + 4);
            dataFim.setHours(23, 59, 59, 999);

            const listaCardapios = await cardapio.find({createdAt: {$gte: dataInicio,$lt: dataFim,},});

            res.status(200).json(listaCardapios);
        } catch (erro) {
            res.status(500).json({ message: `Falha na requisição. ${erro}` });
        }
    }

    static async cadastrarCardapio (req, res) {
        try {
            const novoCardapio = await cardapio.create(req.body)
            res.status(201).json({message: "Objeto criado com sucesso", cardapio: novoCardapio})
        } catch (erro) {
            res.status(500).json({message: `Falha na requisição. ${erro}`})
        }
    }
    static async atualizarCardapio (req, res) {
        try {
            const id = req.params.id;
            await cardapio.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Objeto atualizado com sucesso."})
        } catch (erro) {
            res.status(500).json({message: `Falha na requisição. ${erro}`})
        }
    }
    static async excluirCardapio (req, res) {
        try {
            const id = req.params.id;
            await cardapio.findByIdAndDelete(id);
            res.status(200).json({message : "Objeto excluído com sucesso."})
        } catch (erro) {
            res.status(500).json({message: `Falha na requisição. ${erro}`})
        }
    }
    
}

export default CardapioController;