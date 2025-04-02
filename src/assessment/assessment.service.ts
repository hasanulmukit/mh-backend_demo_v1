import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Assessment, AssessmentDocument } from './assessment.schema';
import { Model } from 'mongoose';

@Injectable()
export class AssessmentService {
  constructor(
    @InjectModel(Assessment.name)
    private assessmentModel: Model<AssessmentDocument>,
  ) {}

  async createAssessment(assessmentData: any): Promise<Assessment> {
    const createdAssessment = new this.assessmentModel(assessmentData);
    return createdAssessment.save();
  }

  async getUserAssessments(userId: string): Promise<Assessment[]> {
    return this.assessmentModel.find({ userId }).exec();
  }
}
