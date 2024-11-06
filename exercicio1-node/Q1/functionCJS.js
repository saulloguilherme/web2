function calculateAge(ano){
   currDate =  new Date().getFullYear()  
   age = currDate - ano 
   return age
} 

module.exports = {
    calculateAge
}