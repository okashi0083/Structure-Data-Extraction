/* extract telephone number by javascript*/

var a ='Store #6354 1135 N.W. LEARY WAY 14 AVE NW & NW LEARY WAY BALLARD, WA 98107 (206) 789-8839 Get store hours and directions'


function transform(data) {
    if (data != null) {
        var n1 = data.trim();
      	return n1.match(/\(\d+\)\s\d+\-\d+/).toString();
    }
}


transform(a);
