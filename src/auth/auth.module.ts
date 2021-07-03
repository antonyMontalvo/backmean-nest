import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module, Global } from '@nestjs/common';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';

@Global()
@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('jwtSecret'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [ConfigService, JwtStrategy, AuthService],
  exports: [AuthService],
  controllers: [],
})
export class AuthModule {}
