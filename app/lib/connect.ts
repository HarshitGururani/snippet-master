import mongoose from "mongoose";

const connect = async (): Promise<void> => {
  const connection: { connected?: number } = {};
  try {
    if (connection.connected === 1) return;
    const db = await mongoose.connect(process.env.MONGO as string);
    connection.connected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
  }
};
export default connect;
