import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AssessmentModule } from './assessment/assessment.module';
import { ContentModule } from './content/content.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/mentalhealth-app'),
    AuthModule,
    UserModule,
    AssessmentModule,
    ContentModule,
  ],
})
export class AppModule {}
