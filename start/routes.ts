import Route from '@ioc:Adonis/Core/Route'

//Container
Route.post('/container', 'ContainersController.create')
Route.put('container/:id', 'ContainersController.update')
Route.get('container/:id', 'ContainersController.show')
Route.delete('container/:id', 'ContainersController.destroy')

//tracking
Route.post('tracking', 'TrackingsController.create')
Route.put('tracking/:id', 'TrackingsController.update')
Route.get('tracking/:id', 'TrackingsController.show')
Route.delete('tracking/:id', 'TrackingsController.destroy')
//report
Route.get('report', 'ReportsController.index')