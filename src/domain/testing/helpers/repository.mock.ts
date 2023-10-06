import { Entity } from '@/domain/models/entity'
import { Repository } from '@/domain/repositories/repository.interface'

export const createMockRepository = <T extends Entity>(): Repository<T> => ({
  create: jest.fn(),
  byId: jest.fn(),
  findAll: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
})
