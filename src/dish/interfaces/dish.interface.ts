import { Document } from 'mongoose';

export interface IDish extends Document {
  readonly name: string;
  readonly description: string;
  readonly img?: string;
  readonly category: string;
  readonly price?: number;
}
