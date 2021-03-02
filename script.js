const quotes=["Time is money.","Time waits for no one.","Better three hours too soon than a minute too late.","Lost time is never found again.","Time is the most valuable thing a man can spend.","Time is the wisest counselor of all.","The key is in not spending time, but in investing it.","Time brings all things to pass.","Men talk of killing time, while time quietly kills them.","Time is a storm in which we are all lost."]
const author=["Benjamin Franklin.","Folklore.","William Shakespeare.","Benjamin Franklin.","Theophrastus.","Pericles."," Stephen R. Covey.","Aeschylus.","Dion Boucicault","William Carlos Williams"]
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
digitarr=["126754","26","12357","12367","4326","14367","145763","126","1234567","123467"]
var dots=document.querySelectorAll(".eachdot")
var colors=document.querySelectorAll(".eachcolor")
angle=0
update_time()
update_date()

// updating time
setInterval(function(){
    update_time()
    update_date()
}, 2000);
// updating dots
setInterval(function(){-
    dots.forEach(function(dot){
        dot.classList.toggle("on")
    })
}, 500);
// updating quotes
setInterval(update_quote, 5000);



function update_quote()
{
    var rand=Math.floor(Math.random()*quotes.length)
    document.getElementById("quote").innerHTML=quotes[rand]
    document.getElementById("writer").innerHTML=author[rand]
}
function update_time()
{
    var today=new Date()
    var hour=today.getHours()
    var mins=today.getMinutes()
    if(hour>12)
        hour=hour-12
    hour=String(hour)
    mins=String(mins)
    if(hour.length==2)
    {
        hour1=hour.substr(0,1)
        hour2=hour.substr(1,2)
    }
    else
    {
        hour1="0"
        hour2=hour.substr(0,1)
    }
    if(mins.length==2)
    {
        min1=mins.substr(0,1)
        min2=mins.substr(1,2)
    }
    else
    {
        min1="0"
        min2=mins.substr(0,1)
    }
    setsegments(hour1,".hour1")
    setsegments(hour2,".hour2")
    setsegments(min1,".min1")
    setsegments(min2,".min2")
    data=document.querySelectorAll(".digit div")
    if(angle==360)
    angle=0
    else if(angle==0)
    angle=360
    data.forEach(function(eachdata)
    {
        eachdata.style.transform="rotate("+angle+"deg)"
    })
}
function update_date()
{
    var today=new Date()
    var year=today.getFullYear()
    var month=today.getMonth()
    var day=today.getDay()
    var date=today.getDate()
    document.getElementById("date").innerHTML=date
    document.getElementById("month").innerHTML=months[month].substr(0,3)
    document.getElementById("year").innerHTML=year
    document.getElementById("day").innerHTML=days[day].substr(0,3)
}

function setsegments(n,divname)
{
    segs=document.querySelectorAll(divname+" div")
    segs.forEach(function(seg)
    {
        segclass=seg.className.split(" ")[0]
        segclass=segclass.substr(segclass.length-1,segclass.length)
        if(digitarr[n].includes(segclass))
            seg.classList.add("on")
        else
            seg.classList.remove("on")
    })
}

colors.forEach(function(eachcolor){
    eachcolor.addEventListener("click",function () {
        document.querySelector(":root").style.setProperty('--color',eachcolor.style.backgroundColor);
    })
})