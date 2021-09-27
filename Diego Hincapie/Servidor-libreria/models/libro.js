import mongoose from 'mongoose';

const Schema = mongoose.Schema; 
 
const libroSchema = new Schema({ 
  disponibilidad: {type: Boolean, default: true},
  estudiante: String, 
  fechaprestamo:{type: Date, default: Date.now},
  autor: String, 
  año:String,
  editorial:String,
  isbn:String,
  titulo: {type: String, required: [true, 'Nombre obligatorio']}, 
});const Libro=mongoose.model('Libro',libroSchema);



export default Libro;