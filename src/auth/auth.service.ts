import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { UserDocument } from '../user/user.schema';

// Plain User interface for toObject() result
interface User {
  _id: string;
  email: string;
  password: string;
  // Add other fields from your user schema as needed
}

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    pass: string,
  ): Promise<Partial<UserDocument>> {
    const user: UserDocument | null = await this.userService.validateUser(
      email,
      pass,
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    const userObj: User = user.toObject() as User;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = userObj;
    return result;
  }

  login(user: Partial<UserDocument>): { access_token: string } {
    const payload = { email: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
