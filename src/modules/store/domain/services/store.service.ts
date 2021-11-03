import { Inject, Injectable, Logger } from '@nestjs/common';
import { ApiError } from 'src/infraestructure/errors/ApiError';
import { Store } from './../../domain/entities/store';
import { StoreRepository } from './../../infrastructure/repository/store.repository';

@Injectable()
export class StoreService {
  private readonly logger = new Logger(StoreService.name);

  constructor(@Inject('IStoreRepository') private readonly storeRepository: StoreRepository) {}

  findAllStores(): Promise<Store[]> {
    try {
      return this.storeRepository.findAll();
    } catch (ex) {
      throw new ApiError({ message: ex.message, code: ex.code });
    }
  }
}
