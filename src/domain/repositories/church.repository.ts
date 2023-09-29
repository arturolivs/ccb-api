import { Church } from '../models/church.entity'
import { Repository } from './repository'

export interface ChurchRepository extends Repository<Church> {}
