import { ChurchRepository } from '@/domain/repositories/church.repository'
import { UseCase } from '../use-case.interface'
import { ChurchEntity } from '@/domain/models/church.entity'

export type GetChurchInput = string

export type GetChurchOutput = ChurchEntity

export class GetChurchUseCase
  implements UseCase<GetChurchInput, GetChurchOutput>
{
  constructor(private churchRepository: ChurchRepository) {}

  async execute(id: GetChurchInput): Promise<GetChurchOutput> {
    return await this.churchRepository.byId(id)
  }
}
