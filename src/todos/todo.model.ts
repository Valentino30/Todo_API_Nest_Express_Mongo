import { Document, Schema } from 'mongoose';

export const TodoSchema = new Schema(
  {
    name: { type: String, required: true },
    isComplete: { type: Boolean, default: false },
  },
  {
    versionKey: false,
    id: true,
    toJSON: {
      transform(_, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  },
);

export interface Todo extends Document {
  id: string;
  name: string;
  isComplete: boolean;
}
