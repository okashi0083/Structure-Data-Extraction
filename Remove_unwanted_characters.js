
/* 
   Remove remove Hi & , from person name
*/


function transform(data)
{
  var n=data.replace(/Hi\s|\,/g,'');
  return n.trim();
}


/*
  Extract only product name
 */

function transform(input)
{
  var s=input.trim();
  if(s.search("XXXXX")!=-1)
  {
    return null;
  }
  else
  {
    return input;}
}
