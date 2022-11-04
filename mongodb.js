import mongoose from "mongoose";

const bd_url = 'mongodb+srv://osmereduardo:Colombia2022@cluster0.dnx9hq7.mongodb.net/dbeventos?retryWrites=true&w=majority';
export const db = await mongoose.connect(bd_url);
console.log("😁La conexion fue realizada con exito a la bd: ", db.connection.name);

export default db;
