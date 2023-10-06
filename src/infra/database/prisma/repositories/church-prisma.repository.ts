import { Church } from '@/domain/models/church.entity'
import { ChurchRepository } from '@/domain/repositories/church.repository'
import { PrismaService } from '../prisma.service'
import { ChurchModelMapper } from '../models/church-model.mapper'

export class ChurchPrismaRepository implements ChurchRepository {
  constructor(private prismaService: PrismaService) {}

  async create(entity: Church): Promise<Church> {
    console.log(entity.toJSON())
    const result = await this.prismaService.church.create({
      data: entity.toJSON(),
    })

    return new Church(result)
  }
  byId(id: string): Promise<Church> {
    return this._get(id)
  }
  findAll(): Promise<Church[]> {
    throw new Error('Method not implemented.')
  }
  update(entity: Church): Promise<void> {
    console.log(entity)
    throw new Error('Method not implemented.')
  }
  delete(id: string): Promise<void> {
    console.log(id)
    throw new Error('Method not implemented.')
  }

  protected async _get(id: string): Promise<Church> {
    try {
      const church = await this.prismaService.church.findUnique({
        where: { id },
      })

      return ChurchModelMapper.toEntity(church)
    } catch {
      throw new Error(`Church model not found for id ${id}`)
    }
  }
}
