import { ChurchRepository } from '@/domain/repositories/church.repository'
import { UseCase } from '../use-case.interface'
import { ChurchEntity, ChurchBaseProps } from '@/domain/models/church.entity'
import { ConflictError } from '@/domain/errors/conflict-error'

export type CreateChurchInput = ChurchBaseProps

export type CreateChurchOutput = ChurchEntity

export class CreateChurchUseCase
  implements UseCase<CreateChurchInput, CreateChurchOutput>
{
  constructor(private churchRepository: ChurchRepository) {}

  async execute(input: CreateChurchInput): Promise<CreateChurchOutput> {
    const currentChurch = await this.churchRepository.findByAddressCode(
      input.cd_address,
    )

    if (currentChurch)
      throw new ConflictError(
        `Already exists a Church with cd_address: ${input.cd_address}`,
      )

    return await this.churchRepository.create(new ChurchEntity(input))
  }
}
