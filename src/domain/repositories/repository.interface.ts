import { TEntity } from '../models/entity'

export interface Repository<T extends TEntity> {
  create(entity: T): Promise<T>
  byId(id: string): Promise<T>
  findAll(): Promise<T[]>
  update(entity: T): Promise<void>
  delete(id: string): Promise<void>
}
