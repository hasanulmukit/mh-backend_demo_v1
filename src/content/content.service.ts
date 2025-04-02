import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Content, ContentDocument } from './content.schema';
import { Model } from 'mongoose';

@Injectable()
export class ContentService {
  constructor(
    @InjectModel(Content.name) private contentModel: Model<ContentDocument>,
  ) {}

  async createContent(data: any): Promise<Content> {
    const content = new this.contentModel(data);
    return content.save();
  }

  async getAllContent(): Promise<Content[]> {
    return this.contentModel.find().exec();
  }
}
