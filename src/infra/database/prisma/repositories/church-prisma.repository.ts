import { ChurchEntity, TChurch } from '@/domain/models/church.entity'
import { ChurchRepository } from '@/domain/repositories/church.repository'
import { PrismaService } from '../prisma.service'
import { ChurchModelMapper } from '../mappers/church-model.mapper'

export class ChurchPrismaRepository implements ChurchRepository {
  constructor(private prismaService: PrismaService) {}

  async create(data: TChurch): Promise<TChurch> {
    const x = new ChurchEntity(data)
    const result = await this.prismaService.church.create({
      data: x.toJSON(),
    })

    return result
  }

  async findAll(): Promise<any> {
    return await this.prismaService.church.findMany()
  }

  async byId(id: string): Promise<TChurch> {
    return await this._get(id)
  }

  update(entity: TChurch): Promise<void> {
    console.log(entity)
    throw new Error('Method not implemented.')
  }

  delete(id: string): Promise<void> {
    console.log(id)
    throw new Error('Method not implemented.')
  }

  protected async _get(id: string): Promise<TChurch> {
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
