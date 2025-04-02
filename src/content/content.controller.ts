import { Controller, Post, Body, Get } from '@nestjs/common';
import { ContentService } from './content.service';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Post()
  async create(@Body() data: any) {
    return this.contentService.createContent(data);
  }

  @Get()
  async findAll() {
    return this.contentService.getAllContent();
  }
}
