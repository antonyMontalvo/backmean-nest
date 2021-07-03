import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ModulesModule } from './modules/modules.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    AuthModule,
    ModulesModule,
  ],
  controllers: [],
  providers: [ConfigService],
})
export class AppModule {}
