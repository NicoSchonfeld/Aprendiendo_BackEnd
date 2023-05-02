import mongoose from "mongoose";

try {
  await mongoose.connect(process.env.URI_MONGO);
} catch (error) {
  console.log(`Existe un error ===========> ${error}`);
}
