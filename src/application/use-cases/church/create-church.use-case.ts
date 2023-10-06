import { ChurchRepository } from '@/domain/repositories/church.repository'
import { UseCase } from '../use-case.interface'
import { Church, ChurchProps } from '@/domain/models/church.entity'

export type CreateChurchInput = {
  locale: string
  cd_address: string
}

export type CreateChurchOutput = ChurchProps

export class CreateChurchUseCase
  implements UseCase<CreateChurchInput, CreateChurchOutput>
{
  constructor(private churchRepository: ChurchRepository) {}

  async execute(input: CreateChurchInput): Promise<CreateChurchOutput> {
    const church = new Church(input)
    const newChurch = await this.churchRepository.create(church)
    return newChurch.toJSON()
  }
}
