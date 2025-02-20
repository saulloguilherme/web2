import mongoose from "mongoose";
import { usuarioSchema } from "./UsuarioModel.js";
import { cardapioSchema } from "./CardapioModel.js";

const ticketSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    //usuario : usuarioSchema,
    //cardapio_dia: cardapioSchema,
    data : { type: Date, required: true },
    campus : { type: String, enum: ["Campus 1", "Campus 2", "Campus 3"], required: true},
    situacao : { type: String, enum: ["Pendente", "Confirmado", "Não pedido"], required: true},
    reserva: { type: Boolean, default: false }
    //  comprovante : { type: String },
}, { versionKey: false });

const ticket = mongoose.model("tickets", ticketSchema);

export { ticket, ticketSchema };