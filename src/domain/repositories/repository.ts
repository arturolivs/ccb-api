import { Entity } from '../models/entity'

export interface Repository<E extends Entity> {
  create(entity: E): Promise<void>
  byId(id: string): Promise<E>
  findAll(): Promise<E[]>
  update(entity: E): Promise<void>
  delete(id: string): Promise<void>
}
