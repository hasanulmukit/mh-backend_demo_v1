import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { AssessmentService } from './assessment.service';

@Controller('assessment')
export class AssessmentController {
  constructor(private readonly assessmentService: AssessmentService) {}

  @Post()
  async create(@Body() assessmentData: any) {
    return this.assessmentService.createAssessment(assessmentData);
  }

  @Get()
  async getAssessments(@Query('userId') userId: string) {
    return this.assessmentService.getUserAssessments(userId);
  }
}
