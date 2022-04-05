import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/guards/jwt.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  login(@Body() body) {
    const token = this.authService.login(body.login, body.password);
    return { tokenAccess: token };
  }

  @UseGuards(JwtGuard)
  @Get('test')
  test(@Req() request) {
    return request.user;
  }
}
