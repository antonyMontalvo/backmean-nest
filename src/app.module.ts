import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import configuration from './infraestructure/config/configuration';
import { DatabaseModule } from './infraestructure/config/database.module';
import { ModulesModule } from './modules/modules.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [configuration] }), AuthModule, DatabaseModule, ModulesModule],
  controllers: [],
  providers: [ConfigService],
})
export class AppModule {}
