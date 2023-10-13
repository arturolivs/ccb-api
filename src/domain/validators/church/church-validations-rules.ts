import {
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator'

import { ChurchProps } from '@domain/models/church.entity'

export class ChurchRules {
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
