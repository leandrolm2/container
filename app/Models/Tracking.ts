import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { movimentTyoe } from 'App/Util/Enum/tracking'

export default class Tracking extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public containerId: number

  @column()
  public movimentType: movimentTyoe

  @column.dateTime({})
  public startedAt: DateTime

  @column.dateTime({})
  public finishedAt: DateTime
}
