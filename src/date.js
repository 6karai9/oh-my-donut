
 function zeroFirst(value)
 {
     if (value < 10)
     {
         value='0'+value;
     }
     return value;
 }

 function time(){
    let d = new Date();
    let hour = zeroFirst(d.getHours()-7);
    let day = d.getDate();
    let minutes = zeroFirst(d.getMinutes());
    let month=new Array("January","February","March","April","May","June",
    "July","August","September","October","November","December");
      
    return month[d.getMonth()] + " " + day + ", " + hour + ":" + minutes;
 }

 setInterval(function () {
    document.getElementById('current__date').innerHTML = time();
}, 1000);