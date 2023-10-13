export type FieldsErrors = Record<string, string[]>

export interface ValidatorFields<PropsValidated> {
  errors: FieldsErrors
  validatedData: PropsValidated
  validate(data: any): boolean
}
