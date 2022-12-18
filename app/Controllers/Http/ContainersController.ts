import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Container from 'App/Models/Container'
import { Message } from 'App/validator/ErrorMessage/container'

export default class ContainersController {
  public async create({request, response}: HttpContextContract) {
    const body = request.body()

    try{
      const container = await Container.create(body)

      return response.status(200).send(container)
    }catch(err){
      console.error(err)
      return response.status(500).send(Message)
    }
  }

  public async show({params, response}: HttpContextContract) {
    const {id} = params

    try{
      const container = await Container.query().where('id', id).firstOrFail()

      return response.status(200).send(container)
    }catch(err){
      console.error(err)
      return response.status(500).send(Message)
    }
  }

  public async update({request, response, params}: HttpContextContract) {
    const {id} = params
    const body = request.body()

    try{
      const container = await Container.query().where('id', id).update(body)
      const newContainer = await Container.query().where('id', id).firstOrFail()

      return response.status(200).send(newContainer)
    }catch(err){
      console.error(err)
      return response.status(500).send(Message)
    }
  }

  public async destroy({params, response}: HttpContextContract) {
    const {id} = params

    try{
      const container = await Container.query().where('id', id).delete()

      return response.status(200).send(container)
    }catch(err){
      console.error(err)
      return response.status(500).send(Message)
    }
  }
}
