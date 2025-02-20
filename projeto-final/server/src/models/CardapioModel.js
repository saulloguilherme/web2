import mongoose from "mongoose";

const cardapioSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  data : { type: Date, required: true },
  prato_principal : { type: String, required: true },
  op_vegetariana : { type: String, required: true },
  acompanhamento : { type: String, required: true },
  guarnicao : { type: String, required: true },
  salada : { type: String, required: true },
  sobremesa : { type: String, required: true }
}, { versionKey: false });

const cardapio = mongoose.model("cardapios", cardapioSchema);

export { cardapio, cardapioSchema };