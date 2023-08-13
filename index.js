for(var i=0;i<7;i++)
{
document.getElementsByClassName("drum")[i].addEventListener("click",function()
{
    var so= this.innerHTML;
    switch(so)
    {
        case 'w':
            var audio= new Audio('tom-1.mp3');
            audio.play();
        case 'a':
            var audio= new Audio('tom-2.mp3');
            audio.play();
            default: var audio= new Audio('crash.mp3');
            audio.play();
    }

   ani(so);
});
}
document.addEventListener("keypress",function(ke) //ke allows us to tap into the event which trigerrs the event listener 
{
    switch(ke.key) //key will check the particular key w/s required
    {
        case 'w':
            var audio= new Audio('tom-1.mp3');
            audio.play();
        case 'a':
            var audio= new Audio('tom-2.mp3');
            audio.play();
        default: var audio= new Audio('kick-bass.mp3');
            audio.play();
    }
    ani(ke.key);
})
function ani(curr)
{
    var activeb= document.querySelector("."+curr); //.curr is how you access classes like .drum
    activeb.classList.add("pressed");
    setTimeout(function(){
        activeb.classList.remove("pressed");
    }),100; //100 means 0.1 sec
}
