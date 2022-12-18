import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Tracking from 'App/Models/Tracking'
import { Message } from 'App/validator/ErrorMessage/container'

export default class TrackingsController {
  public async create({request, response}: HttpContextContract) {
    const body = request.body()

    try{
      const tracking = await Tracking.create(body)

      return response.status(200).send(tracking)
    }catch(err){
      console.error(err)
      return response.status(500).send(Message)
    }
  }

  public async show({params, response}: HttpContextContract) {
    const {id} = params

    try{
      const tracking = await Tracking.query().where('id', id).firstOrFail()

      return response.status(200).send(tracking)
    }catch(err){
      console.error(err)
      return response.status(500).send(Message)
    }
  }

  public async update({request, response, params}: HttpContextContract) {
    const {id} = params
    const body = request.body()

    try{
      const tracking = await Tracking.query().where('id', id).update(body)

      return response.status(200).send(tracking)
    }catch(err){
      console.error(err)
      return response.status(500).send(Message)
    }
  }

  public async destroy({params, response}: HttpContextContract) {
    const {id} = params

    try{
      const tracking = await Tracking.query().where('id', id).delete()

      return response.status(200).send(tracking)
    }catch(err){
      console.error(err)
      return response.status(500).send(Message)
    }
  }
}
