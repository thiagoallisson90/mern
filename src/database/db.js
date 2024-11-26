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

export default connectDatabase;
