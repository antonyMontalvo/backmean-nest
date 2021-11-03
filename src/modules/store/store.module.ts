import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Store } from './domain/entities/store';
import { StoreService } from './domain/services/store.service';
import { StoreController } from './infrastructure/controller/store.controller';
import { StoreRepository } from './infrastructure/repository/store.repository';

const services = [StoreService];

const interfaces = [
  {
    provide: 'IStoreRepository',
    useClass: StoreRepository,
  },
];
@Module({
  imports: [TypeOrmModule.forFeature([Store])],
  controllers: [StoreController],
  providers: [...interfaces, ...services],
})
export class StoreModule {}
