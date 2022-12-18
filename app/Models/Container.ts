import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { category, containerType, status } from 'App/Util/Enum/conatiner'
import { createSerialNumber } from 'App/Util/serialNumber'
import Tracking from './Tracking'

export default class Container extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public client: string

  @column()
  public serialNumber: string

  @column()
  public type: containerType

  @column()
  public status: status

  @column()
  public category: category

  @hasMany(() => Tracking)
  public trackings: HasMany<typeof Tracking>

  @beforeCreate()
  private static async addSerialNumber(container:Container) {
    container.serialNumber = await createSerialNumber()
  }

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
