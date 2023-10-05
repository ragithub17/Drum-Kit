// document.querySelector("div").addEventListener("click",function (){
//     alert("I got clicked!");
// });

var n=document.querySelectorAll(".drum").length;  //we can do it with 
for(var i=0; i<n; i++){                 //loop or also without loop
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var char=this.innerHTML;
        makeSound(char);
        buttonAnimation(char);
       
    });
}
// document.querySelectorAll(".drum")[0].addEventListener("click",function (){
//     var audio=new Audio("./sounds/tom-1.mp3");
//     audio.play();
// });
// document.querySelectorAll(".drum")[1].addEventListener("click",function (){
//     var audio=new Audio("./sounds/tom-2.mp3");
//     audio.play();
// });
// document.querySelectorAll(".drum")[2].addEventListener("click",function (){
//     var audio=new Audio("./sounds/tom-3.mp3");
//     audio.play();
// });
// document.querySelectorAll(".drum")[3].addEventListener("click",function (){
//     var audio=new Audio("./sounds/tom-4.mp3");
//     audio.play();
// });
// document.querySelectorAll(".drum")[4].addEventListener("click",function (){
//     var audio=new Audio("./sounds/snare.mp3");
//     audio.play();
// });
// document.querySelectorAll(".drum")[5].addEventListener("click",function (){
//     var audio=new Audio("./sounds/kick-bass.mp3");
//     audio.play();
// });
// document.querySelectorAll(".drum")[6].addEventListener("click",function (){
//     var audio=new Audio("./sounds/crash.mp3");
//     audio.play();
// });



// we can do by both the ways here "this" keyword is giving us the 
// names of the buttons so it becomes very easy to connect the audio file 
// corresponding to the button.

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});



function makeSound(char){
    if(char==="w"){
        var audio=new Audio("./sounds/tom-1.mp3");
        audio.play();
    }
    else if(char==="a"){
        var audio=new Audio("./sounds/tom-2.mp3");
        audio.play();
    }
    else if(char==="s"){
        var audio=new Audio("./sounds/tom-3.mp3");
        audio.play();
    }
    else if(char==="d"){
        var audio=new Audio("./sounds/tom-4.mp3");
        audio.play();
    }
    else if(char==="j"){
        var audio=new Audio("./sounds/snare.mp3");
        audio.play();
    }
    else if(char==="k"){
        var audio=new Audio("./sounds/kick-bass.mp3");
        audio.play();
    }
    else{
        var audio=new Audio("./sounds/crash.mp3");
        audio.play();
    }
}


function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}