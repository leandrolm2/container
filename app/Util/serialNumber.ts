export async function createSerialNumber() {
    let char = ''
    const randomNumber = Math.floor(1000000 + Math.random() * 9000000)
    const characters = 'RWEQUIYTPOFASDJHKGLVXCZNBMeqwryutiopfsdahjkglvcxzbnm'

    for(let i = 0; i < 4; i++) {
        char += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    const serialNumber: string = char + randomNumber;

    return serialNumber
}