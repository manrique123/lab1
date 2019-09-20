function checkPalindrome( aa )
{
  var resp="";
  for(i=aa.length-1;i>=0;i--)
  {
    resp=resp+aa.charAt(i);
   }
   if(resp==aa){
    return true;
    }
    else {
      return false;
    }
 }
 module.exports=checkPalindrome;
