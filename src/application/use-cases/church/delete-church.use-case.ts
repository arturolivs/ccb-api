import { ChurchRepository } from '@/domain/repositories/church.repository'
import { UseCase } from '../use-case.interface'
import { NotFoundError } from '@/domain/errors/not-found-error'

export type DeleteChurchInput = string

export type DeleteChurchOutput = void

export class DeleteChurchUseCase
  implements UseCase<DeleteChurchInput, DeleteChurchOutput>
{
  constructor(private churchRepository: ChurchRepository) {}

  async execute(id: DeleteChurchInput): Promise<DeleteChurchOutput> {
    const currentChurch = await this.churchRepository.byId(id)

    if (!currentChurch)
      throw new NotFoundError(`Church with Id '${id}' not found.`)

    await this.churchRepository.delete(id)
  }
}
