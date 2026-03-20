import mongoose from 'mongoose';

async function conectaNaDatabase() {
    mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB conectado");
    return mongoose.connection;
}

export default conectaNaDatabase;