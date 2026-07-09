function numbertype(number)
{


if(number>0){
    return "Positive";
}

else if (number<0)
{
return "negative";
 
}

else (number === 0)
{
return "Zero";
}

}
var number = 10;

console.log(numbertype(number));