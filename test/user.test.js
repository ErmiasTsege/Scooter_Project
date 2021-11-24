const User= require('../src/user')
describe ("user Class", ()=>{ 
    const testUser= new User("debebe","22/22/2222")
    test("user needs name",()=> {
       
        expect(testUser.name).toBe("debebe")
        
    })
    test("user has date of birth",()=> {
        
        expect(testUser.dateOfBirth).toBe("22/22/2222")
        
    })
    test("check assignToScooter",()=> {
       
        testUser.assignToScooter()
        expect(testUser.assignToScooter()).toBe(`${testUser.name} assigned a scooter`)
        
    })
    test("check makePayment",()=> {
  
        testUser.makePayment()
        expect(testUser.makePayment()).toBe('Paid')
        
    })

   
})

    




