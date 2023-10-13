import { v4 as uuidv4 } from 'uuid'

export type EntityProps = {
  id?: string
  createdAt?: Date
}

export abstract class Entity<Props = any> {
  private readonly _id: string
  private readonly _createdAt?: Date

  public readonly props: Props

  constructor(props: Props, externalId?: string) {
    this.props = props
    this._id = externalId || uuidv4()
    this._createdAt = new Date()
  }

  get id() {
    return this._id
  }

  get createdAt() {
    return this._createdAt
  }

  toJSON(): { id: string; createdAt?: string } & Props {
    return {
      id: this._id,
      createdAt: this._createdAt?.toISOString(),
      ...this.props,
    }
  }
}
