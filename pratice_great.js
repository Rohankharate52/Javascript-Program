

let srore = 95;
let grade;

if(srore >= 90 && srore <= 100) 
{
    grade = 'A';

}
else if (srore >= 70 && srore<= 89) {
grade = 'B';
}
else if (srore >= 60 && srore <= 69){
    grade = 'C';

} else if(srore >= 50 && srore <= 59) {
    grade = 'D';

} else if(srore >= 0 && srore <= 49) 
{
    grade =  'F';
}
console.log("according to your score grade was :" ,grade )