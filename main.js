let add = document.getElementById("click");
let reset = document.getElementById("reset");
let int=document.getElementById("number");
let integer = 0;
add.addEventListener('click',function(){
integer+=1;
int.innerHTML=integer;
})

reset.addEventListener('click',function(){
    integer=0;
    int.innerHTML=integer;
})