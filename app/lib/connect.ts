import mongoose from "mongoose";

const connect = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO as string);
    console.log("Db connected...");
  } catch (error) {
    console.log(error);
  }
};
export default connect;
