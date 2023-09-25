function allClear(){
    document.getElementById("res").value="";
}
function fromKeyboard(input){
    document.getElementById("res").value+=input;
}
function calculation(){
     var output=eval(document.getElementById("res").value);
     document.getElementById("res").value=output;
}