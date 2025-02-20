import mongoose from "mongoose";
import bcrypt from "bcrypt";

const usuarioSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome : { type: String, required: true },
  matricula : { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  subsidio : { type: Boolean, required: true },
}, { versionKey: false });

usuarioSchema.pre('save', async function (next) {
  if (!this.isModified('senha')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.senha = bcrypt.hash(this.senha, salt);
    next();
  } catch (err) {
    next(err);
  }
});

usuarioSchema.methods.validarSenha = async function (senha) {
  return await bcrypt.compare(senha, this.senha);
};

const usuario = mongoose.model("usuarios", usuarioSchema);

export { usuario, usuarioSchema };