function adjacentElementsProduct( inputArray  )
{
  var resp,mayor=-1000000;
  for(i=0;i<((inputArray.length)-1);i++)
  {
    resp=inputArray[i]*inputArray[i+1];
    if(resp>=mayor)
      mayor=resp;
   }

      return mayor;

 }
 module.exports=adjacentElementsProduct;
