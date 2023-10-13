import { ChurchEntity } from '@/domain/models/church.entity'
import { ChurchRepository } from '@/domain/repositories/church.repository'
import { PrismaService } from '../prisma.service'
import { ChurchModelMapper } from '../mappers/church-model.mapper'

export class ChurchPrismaRepository implements ChurchRepository {
  constructor(private prismaService: PrismaService) {}

  async create(data: ChurchEntity): Promise<ChurchEntity> {
    const result = await this.prismaService.church.create({
      data: data.toJSON(),
    })

    return ChurchModelMapper.toEntity(result)
  }

  async findAll(): Promise<any> {
    return await this.prismaService.church.findMany()
  }

  async byId(id: string): Promise<ChurchEntity> {
    return await this._get(id)
  }

  update(entity: ChurchEntity): Promise<void> {
    console.log(entity)
    throw new Error('Method not implemented.')
  }

  delete(id: string): Promise<void> {
    console.log(id)
    throw new Error('Method not implemented.')
  }

  protected async _get(id: string): Promise<ChurchEntity> {
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
