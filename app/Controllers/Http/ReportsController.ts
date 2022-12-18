import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { createDashBoard } from 'App/Util/reportMoviment'
import { Message } from 'App/validator/ErrorMessage/container'

export default class ReportsController {
  public async index({response}: HttpContextContract) {

    try{
      const report = await createDashBoard()

      return response.status(200).send(report)
    }catch(err){
      console.error(err)
      return response.status(500).send(Message)
    }
  }
}
