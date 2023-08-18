var td =document.querySelector("#dateTime");

const dtf = () =>
{
    var dte = new Date();
var snd =dte.getSeconds();
var mins =dte.getMinutes();
var hrs = dte.getHours();
var yr = dte.getFullYear();
    td.innerHTML ="Current Time is :" + hrs + ":" + mins + ":" + snd;
    // dtf();
};


setInterval(dtf,1);
console.log("this is working");