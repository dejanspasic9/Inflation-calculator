function inflationCalculator()  {

let inflationRate = document.querySelector('#inflationRate');
let money = document.querySelector('#money');


inflationRate = parseFloat(inflationRate.value);  // prebacio string u decimalne brojeve
money = parseFloat(money.value);


let years = document.querySelector('#years');

years = parseFloat(years.value);
 
let worth = money + (money * (inflationRate/ 100)); //formula za racunanje inflacije i ovde ce biti izracunato samo za 1 godinu


 
for( i=1; i < years;i++) {

worth += worth *(inflationRate / 100);   // ovde ce biti izracunato za onaj broj godina koji mi zelimo


}
 
worth = worth.toFixed(2); // da zaokruglimo na dve decimale
let newElement = document.createElement('div'); //formiramo novi element 

newElement.className = 'new-value';
newElement.innerText = ` Danasnjih ${money} eura vredi isto kao ${worth}eura  za ${years} godina`; 



document.querySelector('.container').appendChild(newElement);


}
