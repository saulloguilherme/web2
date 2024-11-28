import mongoose, {mongo} from "mongoose";

const eventoSchema = new mongoose.Schema({
    id: {type:mongoose.Schema.Types.ObjectId},
    titulo: {type:String, require:true},
    descricao: {type:String},
    data:{type:Date},
    local:{type:String},
    listaParticipantes:[{ type: mongoose.Schema.Types.ObjectId, ref: 'participantes' }]
}, {versionKey: false})

const evento = mongoose.model('evento', eventoSchema);

export default evento;