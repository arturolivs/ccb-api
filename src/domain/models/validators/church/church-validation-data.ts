import {
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator'

import { ChurchProps } from '../../church.entity'

export class ChurchValidationData {
  @MaxLength(16)
  @IsString()
  @IsNotEmpty()
  cd_address: string

  @MaxLength(64)
  @IsString()
  @IsNotEmpty()
  locale: string

  @IsDate()
  @IsOptional()
  createdAt?: Date

  constructor({ cd_address, locale, createdAt }: ChurchProps) {
    Object.assign(this, { cd_address, locale, createdAt })
  }
}
