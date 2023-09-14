//question 2
//function to convert from Fahrenheit to Celsius
const fahrenheit=80;
const celcius=(fahrenheit-32)*5/9
function convertToC(fahrenheit){
    return celcius;
}
console.log(celcius)


   //question 4 
   //check if Maurice plan will work
function mauricesPlanWillWork() {

    const steveSnails = { s: 1, m: 2, f: 3 };
    const mauriceSnails = { s: 1, m: 2, f: 3 };
  
    let mauriceWins = 0;
  
    if (mauriceSnails.s > steveSnails.f) {
      mauriceWins++;
    }
  
    if (mauriceSnails.m > steveSnails.s) {
      mauriceWins++;
    }
  

    if (mauriceSnails.f > steveSnails.m) {
      mauriceWins++;
    }
  
    return mauriceWins >=2;
}
  const result = mauricesPlanWillWork();
  console.log(result);


//question 5
//property with prop-2
  function getProperty(obj) {
    return obj.property;
  }
  const property = {
    property1: 'prop-1',
    property2 :'prop-1'
  }
  console.log(property['property2'])


 //Question 3
//function that converts voltage and current to power
 function toConvert(v,I){
    return P=v*I;
 }
 const answer= toConvert(2,2)
 console.log(answer)

//question 1
 //function to get property and continent
 function getCountry(obj){
    return obj.country;
 }
 const location ={
    country:"USA",
    continent:"North America"
 }
    console.log(location)


 