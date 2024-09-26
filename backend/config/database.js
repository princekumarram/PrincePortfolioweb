import mongoose from "mongoose";

export const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((c) => {
      console.log(`Mongodb connect to: ${c.connection.host}`);
    })
    .catch((e) => {
      console.log(e);
    });
};



// import mongoose from "mongoose";
// mongoose.set('strictQuery', true);


// export const connectDatabase = () => {
//   mongoose.connect("mongodb://127.0.0.1:27017/portfolio")
//     .then((c) => {
//       console.log(`Mongodb connect to: ${c.connection.host}`);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// };