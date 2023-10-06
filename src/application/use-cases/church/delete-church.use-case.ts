import { ChurchRepository } from '@/domain/repositories/church.repository'
import { UseCase } from '../use-case.interface'

export type DeleteChurchInput = {
  id: string
}

export type DeleteChurchOutput = void

export class DeleteChurchUseCase
  implements UseCase<DeleteChurchInput, DeleteChurchOutput>
{
  constructor(private churchRepository: ChurchRepository) {}

  async execute(input: DeleteChurchInput): Promise<DeleteChurchOutput> {
    await this.churchRepository.delete(input.id)
  }
}
