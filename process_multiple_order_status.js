/* 
How to process two or more order status.
Template Type: Parcel Delivery
Template ID: 1081194
*/

function transform(input)
{
  var s=input.trim();
  if(s.search("pickup")!=-1)
  {
    return "https://schema.org/OrderPickupAvailable";
  }
  else
  {
    return "http://schema.org/OrderDelivered";}
}

