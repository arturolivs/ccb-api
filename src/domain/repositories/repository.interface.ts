import { Entity } from '../models/entity'

export interface Repository<E extends Entity> {
  create(entity: E): Promise<E>
  byId(id: string): Promise<E>
  findAll(): Promise<E[]>
  update(entity: E): Promise<E>
  delete(id: string): Promise<void>
}
