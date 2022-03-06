
var btn=document.querySelectorAll(".drum").length;

for(var i=0;i<btn;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function(){
   var btnIneer=this.innerHTML;
   makeSound(btnIneer);
   animationS(btnIneer);

    this.style.color="black";
    
    
   
   

    
})

}
document.addEventListener("keypress",function(event){
   makeSound(event.key);
   animationS(event.key);
})
function makeSound(key){
    switch(key){
        case "w":
          var audio = new Audio('crash.mp3');
             audio.play();
             break;
           
           case "a":
          var audio = new Audio('kick-bass.mp3');
             audio.play();
           break;
           case "s":
          var audio = new Audio('snare.mp3');
             audio.play();
           break;
           case "d":
          var audio = new Audio('tom1.mp3');
             audio.play();
           break;
           case "j":
          var audio = new Audio('tom2.mp3');
             audio.play();
           break;
           case "k":
          var audio = new Audio('tom3.mp3');
             audio.play();
           break;
           case "l":
            var audio = new Audio('tom4.mp3');
               audio.play();
               break;
           }


}
function animationS(currentKey){
var activebtn=document.querySelector("."+currentKey);
activebtn.classList.add("pressed");
setTimeout(function(){
activebtn.classList.remove("pressed");
},100)
}