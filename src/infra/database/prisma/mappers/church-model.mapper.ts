import { ChurchEntity } from '@/domain/models/church.entity'
import { Church as PrismaChurch } from '@prisma/client'

export class ChurchModelMapper {
  static toEntity({ id, cd_address, locale, createdAt }: PrismaChurch) {
    const data = {
      cd_address,
      locale,
      createdAt,
    }

    try {
      return new ChurchEntity(data, id).toJSON()
    } catch {
      throw new Error('Church entity not be loaded')
    }
  }
}
