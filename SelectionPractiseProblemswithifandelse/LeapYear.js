//Check input Year is a Leap Year or not.
let year = (Math.floor(Math.random() *9000)+1000);  //1000-9999
console.log("Year : "+year);
leapCheck1=year % 400;
leapCheck2=year % 100;
leapCheck3=year % 4;
if (leapCheck1== 0 ||  leapCheck2 !=0 && leapCheck3== 0)
{
    console.log("Is leap year.");
}
else console.log("Not a leap year.");