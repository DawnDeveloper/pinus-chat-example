import { Schema, Document, Model, model } from "mongoose";

var UserSchema: Schema = new Schema({
    username: String,
    password: String,
    nickname: String,
    level: Number,
    state: Boolean,
  }, { timestamps: true });
  
  export interface IUser extends Document {
    username: string,
    password: string,
    nickname: string,
    level: number,
    state: boolean,
    createdAt: Date;
    updatedAt: Date;
  }
  var UserModel: Model<IUser> = model<IUser>('User', UserSchema);
  
  export default UserModel;