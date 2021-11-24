
const ChargingStation=require('./chargingstation.js')
const Scooter=require('./scooter.js')
class User {
   
    static user = []
   static isReturn=false
    constructor(name,dateOfBirth){
        this.name=name;
        this.dateOfBirth=dateOfBirth;        
    }
    assignToScooter(){
          return `${this.name} assigned a scooter`
          user.push(this.name)           
            // return new Promise(function (resolve, reject) {
                
            //         const result = 
                    
            //         resolve(result)               
            //     })
            }         
  
   makePayment(){
      // if(isReturn===true)
       //{ 
           return "Paid"
        //} 
      // else {return "Payment Failed"}
   }

}
module.exports=User
const user1=new User("Ermias","9/99/8000")
console.log(user1)
console.log(user1.assignToScooter())
console.log(user1.makePayment())