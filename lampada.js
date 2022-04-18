const turnOn = document.getElementById( "turnOn" );
const turnOff = document.getElementById( "turnOff" );
const lamp = document.getElementById( "lamp" );

function lampOn() {
    lamp.src = "./lampada-ligada.gif";
}
function lampOff () {

    lamp.src = "./lampada-desligada.gif";
}

turnOn.addEventListener( "click", lampOn );
turnOff.addEventListener("click", lampOff);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
