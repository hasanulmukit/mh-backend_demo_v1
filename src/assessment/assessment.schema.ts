import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AssessmentDocument = Assessment & Document;

@Schema({ timestamps: true })
export class Assessment {
  @Prop({ required: true })
  userId: string | undefined;

  @Prop({ required: true })
  type: string | undefined; // e.g., 'quiz' or 'checkin'

  @Prop({ required: true })
  responses: Record<string, any> | undefined; // e.g., { stress: 5, anxiety: 4 } or { mood: 7 }

  @Prop({ default: new Date() })
  date: Date | undefined;
}

export const AssessmentSchema = SchemaFactory.createForClass(Assessment);
