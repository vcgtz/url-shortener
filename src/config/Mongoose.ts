import mongoose from 'mongoose';

export default class Mongoose {
  async connect(): Promise<void> {
    await mongoose.connect(
      `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URL}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}?authSource=admin`
    );
  }
}
