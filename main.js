changeButton = document.getElementById("changeButton")
colorCode = document.getElementById("colorCode")


//make the background color random rgb and show its value on screen
function colorChanger(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "RGB(" + x + "," + y + "," + z + ")";
    
    document.body.style.backgroundColor = bgColor;
    colorCode.innerHTML = bgColor;
    
    
}


changeButton.addEventListener("click", function(){
    colorChanger()
})
