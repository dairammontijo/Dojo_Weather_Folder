console.log("it's working bro")

var highs = document.getElementsByClassName('red')
var lows = document.getElementsByClassName('blue')

function changeTemp(element) {
    //console.log(element.value)
    if(element.value == "f"){
        for(var i=0; i<highs.length; i++){
        tempValue = parseInt(highs[i].innerText)
        tempValue*=9/5
        tempValue +=32 
        highs[i].innerText = tempValue          
        }
    }
}

function page_loading() {
    alert("Loading weather report...");
}

function hide() {
    bottom.remove();
}