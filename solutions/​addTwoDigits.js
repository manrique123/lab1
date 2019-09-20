function ​addTwoDigits(dig){
var resp=dig/10;
var a=dig%10;


  return (parseInt(resp,10)+parseInt(a,10));
}
 module.exports=addTwoDigits;
//console.log(digitos(45));
