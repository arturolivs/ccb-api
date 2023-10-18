import { ChurchRepository } from '@/domain/repositories/church.repository'
import { UseCase } from '../use-case.interface'
import { ChurchEntity, ChurchProps } from '@/domain/models/church.entity'
import { NotFoundError } from '@/domain/errors/not-found-error'

export type UpdateChurchInput = ChurchProps

export type UpdateChurchOutput = ChurchEntity

export class UpdateChurchUseCase
  implements UseCase<UpdateChurchInput, UpdateChurchOutput>
{
  constructor(private churchRepository: ChurchRepository) {}

  async execute(input: UpdateChurchInput): Promise<UpdateChurchOutput> {
    const currentChurch = await this.churchRepository.byId(input.id)

    if (!currentChurch)
      throw new NotFoundError(`Church with Id '${input.id}' not found.`)

    return await this.churchRepository.update(new ChurchEntity(input, input.id))
  }
}
