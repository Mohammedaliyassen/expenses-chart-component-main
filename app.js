// #mon,#tue,#wed,#thu,#fri,#sat,#sun

var mon = document.getElementById('mon');
var tue = document.getElementById('tue');
var wed = document.getElementById('wed');
var thu = document.getElementById('thu');
var fri = document.getElementById('fri');
var sat = document.getElementById('sat');
var sun = document.getElementById('sun');
var spending = {
    mon : 33,
    tue : 43,
    wed : 22,
    thu : 11,
    fri : 25,
    sat : 34,
    sun : 85,
}

setTimeout(() => {
    mon.style.cssText='height: 20%';
    tue.style.cssText='height: 40%';
    wed.style.cssText='height: 60%';
    thu.style.cssText='height: 35%';
    fri.style.cssText='height: 25%';
    sat.style.cssText='height: 50%';
    sun.style.cssText='height: 32%';
}, 100);
var span = document.createElement('span');
function info(lon , spend){
    lon.style.backgroundColor=' #b4dfe5' ;
    lon.appendChild(span);
    span.innerHTML=`$${spend}`;
    console.log(lon)
    span.style.cssText='width: 10%;position: relative;top: -25px;font-size: 12px;left: -14%;background-color: #392315;padding: 5px;color: #ffff;border-radius: 5px;'
    setTimeout(() => {
        mon.style.cssText='height: 20%';
        tue.style.cssText='height: 40%';
        wed.style.cssText='height: 60%';
        thu.style.cssText='height: 35%';
        fri.style.cssText='height: 25%';
        sat.style.cssText='height: 50%';
        sun.style.cssText='height: 32%';
    }, 5000);
    if(screen.width <= 430){
        span.style.cssText='position: relative;top: -25px;font-size: 10px;left: -14%;background-color: #392315;padding: 5px;color: #ffff;border-radius: 5px;'
    }
    if(screen.width >= 430 && screen.width <= 1057){
        span.style.cssText='position: relative;top: -45px;font-size: 27px;left: -8%;background-color: #392315;padding: 5px;color: #ffff;border-radius: 5px;'
    }
   
}
if(screen.width <= 1057){
    document.querySelector('#dad').style.width='100%';
}
