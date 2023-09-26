import { validateSync, ValidationError } from 'class-validator'
import {
  FieldsErrors,
  ValidatorFieldsInterface,
} from './validator-fields.interface'

export abstract class ClassValidatorFields<TData>
  implements ValidatorFieldsInterface<TData>
{
  errors: FieldsErrors = {}
  validatedData: TData

  validate(data: any): boolean {
    const errors: ValidationError[] = validateSync(data)

    if (errors.length) {
      this.errors = {}
      errors.forEach((error) => {
        const field = error.property

        if (error.constraints) {
          this.errors[field] = Object.values(error.constraints)
        }
      })
    } else {
      this.validatedData = data
    }

    return !errors.length
  }
}
