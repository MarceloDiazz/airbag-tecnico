const mongoose = require("mongoose");

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(
    "mongodb+srv://Marcelo:Chelodev21@crud-autos.tsm56.mongodb.net/crud-autos?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  connection.isConnected = db.connections[0].readyState;
}

module.exports = dbConnect;
