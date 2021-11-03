import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Store } from './../../domain/entities/store';

@Injectable()
export class StoreRepository {
  constructor(
    @InjectRepository(Store) private readonly storeRepository: Repository<Store>,
    @InjectEntityManager() private entityManager: EntityManager,
  ) {}

  async findAll(): Promise<Store[]> {
    return await this.storeRepository.find();
  }
}
