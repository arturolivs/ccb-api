import { ChurchRepository } from '@/domain/repositories/church.repository'
import { UseCase } from '../use-case.interface'
import { ChurchEntity, ChurchBaseProps } from '@/domain/models/church.entity'

export type CreateChurchInput = ChurchBaseProps

export type CreateChurchOutput = ChurchEntity

export class CreateChurchUseCase
  implements UseCase<CreateChurchInput, CreateChurchOutput>
{
  constructor(private churchRepository: ChurchRepository) {}

  async execute(input: CreateChurchInput): Promise<CreateChurchOutput> {
    const church = new ChurchEntity(input)
    return await this.churchRepository.create(church)
  }
}
