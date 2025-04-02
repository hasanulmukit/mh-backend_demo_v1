import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContentDocument = Content & Document;

@Schema({ timestamps: true })
export class Content {
  @Prop({ required: true })
  title: string | undefined;

  @Prop({ required: true })
  type: string | undefined; // 'article', 'audio', or 'video'

  @Prop()
  description: string | undefined;

  @Prop({ required: true })
  url: string | undefined;
}

export const ContentSchema = SchemaFactory.createForClass(Content);
