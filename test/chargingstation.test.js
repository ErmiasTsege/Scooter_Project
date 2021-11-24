
const ChargingStation= require('../src/chargingstation')
describe ("ChargingStation Class", ()=>{
   jest.setTimeout(8000);   
    const testChargingStation = new ChargingStation("Neverland") 
    test("ChargingStation is location",()=> {        
        expect(testChargingStation.stationLocaton).toBe("Neverland")        
    })
    test("ChargingStation capacity",()=> {        
        expect(testChargingStation.capacity).toBe(10)        
    })
    

    test("check charging",async()=> {        
        await testChargingStation.charge()
        console.log("Charging Complete")
        
    })


})





