import Container from "App/Models/Container";
import Tracking from "App/Models/Tracking";

export async function createDashBoard() {
    let mov = {}
    let info = {}
    let dashBoardInfo = {
        client: '',
        infoMoviment: info
    }
    const infoClient: {}[] = [] 

    async function reset():Promise<void> {
        info = {}
        dashBoardInfo = {
            client: '',
            infoMoviment: info
        }
    }

    async function addToBoard(index: Tracking[]):Promise<void> {
        for(let track of index ) {
            if(!info[track[track.movimentType]]) {
                info[track.movimentType] = 0
            }

            info[track.movimentType] += 1
        }
    }

    async function totalMoviment(moviment: Tracking[], client: string) {
        if(client === dashBoardInfo.client) {
            await addToBoard(moviment)
            return
        }

        infoClient.push(dashBoardInfo)
        await reset()
        dashBoardInfo.client = client
        await addToBoard(moviment)
    }

    try{
        const client = await Container.query().preload('trackings').orderBy('client')
        dashBoardInfo.client = client[0].client
        for (let container of client) {
            if(!mov[container.category]) mov[container.category] = 1
            mov[container.category] += 1

            await totalMoviment(container.trackings, container.client)
        }

        infoClient.push(dashBoardInfo)

        const dash = {infoClient, mov}
        return dash
    }catch(err){
        console.error(err)
        return err
    }
}