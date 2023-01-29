let raceNumber = Math.floor(Math.random() * 1000);
let registerEarly=true;
let runnerAge=19;
if (runnerAge>18&&raceNumber>=1000){
  raceNumber+=runnerAge;
  console.log(`they will race at 9.30am  ${raceNumber}`);
}
else if(runnerAge>18&&raceNumber<1000)
{
console.log(`they will race at 11.00am ${raceNumber}`);
}else if(runnerAge<18)
{
  console.log(`they will race at 12.30pm ${raceNumber}`);
}
else{
  console.log('see the registration desk');
}
