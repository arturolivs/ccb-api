import { v4 as uuidv4 } from 'uuid'

export abstract class Entity<Props = any> {
  public readonly _id: string
  public readonly _createdAt?: Date

  public readonly props: Props

  constructor(props: Props, id?: string) {
    this.props = props
    this._id = id || uuidv4()
    this._createdAt = new Date()
  }

  get id() {
    return this._id
  }

  toJSON(): Required<{ id: string; createdAt: Date } & Props> {
    return {
      id: this._id,
      createdAt: this._createdAt?.toISOString(),
      ...this.props,
    } as Required<{ id: string; createdAt: Date } & Props>
  }
}
