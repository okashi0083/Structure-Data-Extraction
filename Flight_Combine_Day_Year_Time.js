/* FlightReservation Template 
   Combine Day Year Time */

// Javascript in Flight

function transform(data) {
  var depTime = get(data,"departureTime");
  var arrTime = get(data,"arrivalTime");
  var depDate = get(data,"departureDate");
  var arrDate = get(data,"arrivalDate");
  var year = get(data,"year");

  if(arrDate == null) arrDate = depDate;

  var index = -1;
  if(arrTime) index = arrTime.indexOf("+");
  if(index != -1) {
    var dayOffset = arrTime.substring(index+1);
    dayOffset = dayOffset.replace(/[\s+]*day.*/,'');
    var date = Date.parseExact(arrDate,'M/dd/yy');
    if(dayOffset == '1') date = date.addDays(1);
    if(dayOffset == '2') date = date.addDays(2);
    arrDate = date.toShortDateString();
    arrTime = arrTime.substring(0,index);
  }

 
   return {
     
           "http://schema.org/departureTime":[depDate + ', ' + year + ' ' +depTime],
           "http://schema.org/arrivalTime":[arrDate + ', ' + year + ' ' +arrTime]
          };
 }

function get(data,name) {
   var value = data.get("http://schema.org/"+name);
   if(value != null && value.length > 0) value = value.get(0);
   return value;
}
