import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Controller('password')
export class PasswordController {
  constructor(private readonly userService: UserService) {}

  @Post('recover')
  async recoverPassword(@Body() body: { email: string; newPassword: string }) {
    return this.userService.resetPassword(body.email, body.newPassword);
  }
}
