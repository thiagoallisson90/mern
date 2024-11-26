import mongoose from "mongoose";

const connectDatabase = () => {
  console.log("Wait connecting to the database");

  mongoose
    .connect(
      "mongodb+srv://thiagoallisson:HqlOhwFsjuDDZBbc@cluster0.egpjy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" /*,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }*/
    )
    .then(() => console.log("Mongo DB Atlas Connected"))
    .catch((error) => console.log(error));
};

const createConnection = async () => {
  await mongoose.connect(
    "mongodb+srv://thiagoallisson:HqlOhwFsjuDDZBbc@cluster0.egpjy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
};

mongoose.connection.on("connected", () => {
  console.log("Connection established");
});

mongoose.connection.on("error", (err) => {
  console.error("Error on connection", err);
});

process.on("SIGINT", async () => {
  try {
    await mongoose.connection.close();
    console.log("Conection closed");
    process.exit(0);
  } catch (err) {
    console.error("Error to close connection:", err);
    process.exit(1);
  }
});

export { connectDatabase, createConnection };
