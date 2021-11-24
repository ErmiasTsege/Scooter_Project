class ChargingStation {
    static avaliableAtDocStation =[]
    constructor(stationLocaton){
      this.stationLocaton=stationLocaton
      this.capacity=10
    }

    async charge(){
        console.log('start charging')
        await new Promise(resolve=>setTimeout(resolve,2000))
        //console.log('charge complete')
    }
}

module.exports=ChargingStation
const c1 = new ChargingStation("NW")
console.log(c1.charge())