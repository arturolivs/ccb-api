import { ChurchEntity } from '../models/church.entity'
import { Repository } from './repository.interface'

export interface ChurchRepository extends Repository<ChurchEntity> {
  findByAddressCode(cd_address: string): Promise<ChurchEntity>
}
