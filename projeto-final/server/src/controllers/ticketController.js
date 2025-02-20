import { ticket } from "../models/TicketModel.js"

class TicketController {

    static async listarTodos (req, res) {
        try {
            const listaTickets = await ticket.find({});
            res.status(200).json(listaTickets)
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

            const listaTickets = await ticket.find({data: {$gte: dataInicio,$lt: dataFim,},});

            res.status(200).json(listaTickets);
        } catch (erro) {
            res.status(500).json({ message: `Falha na requisição. ${erro}` });
        }
    }

    static async cadastrarTicket (req, res) {
        try {
            const novoTicket = await ticket.create(req.body)
            res.status(201).json({message: "Objeto criado com sucesso", ticket: novoTicket})
        } catch (erro) {
            res.status(500).json({message: `Falha na requisição. ${erro}`})
        }
    }
    static async atualizarTicket (req, res) {
        try {
            const id = req.params.id;
            await ticket.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Objeto atualizado com sucesso."})
        } catch (erro) {
            res.status(500).json({message: `Falha na requisição. ${erro}`})
        }
    }
    static async excluirTicket (req, res) {
        try {
            const id = req.params.id;
            await ticket.findByIdAndDelete(id);
            res.status(200).json({message : "Objeto excluído com sucesso."})
        } catch (erro) {
            res.status(500).json({message: `Falha na requisição. ${erro}`})
        }
    }
    
}

export default TicketController;