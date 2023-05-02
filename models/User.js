import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String, // Es de tipo string
    required: true, // Es requerido
    trim: true, // Limpria espacios
    unique: true, // Registra un email unico (No se puede repetir)
    lowercase: true, // Se pasa todo a minuscula
    /* index: { unique: true }, */
  },
  password: {
    type: String,
    required: true,
  },
});

export const User = model("user", userSchema);
