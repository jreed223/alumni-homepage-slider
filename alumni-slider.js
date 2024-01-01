
function storyAction(e){
    var currentStory = document.getElementsByClassName("active-story"); 
    var targetID = e.getAttribute("id"); // gets the id of the target story

    if(targetID+'-div'== currentStory[0].id){
        //Do nothing
    }else{
        var newStory = document.getElementById(targetID+'-div'); //new story div

        currentStory[0].classList.remove("activate-animation");  //remove animation class styling
        
        //sets current story class styling so it's below the new story
        var prevStory = document.getElementsByClassName("prev-active");
        prevStory[0].className = "image-stack"; 
        currentStory[0].className = "prev-active";  
        
        //sets new story to the active styling so it is at the top of the stack
        newStory.className = "active-story";

        //sets current story button to inactive styling
        var activeButton = document.getElementsByClassName("active-story-button"); //locates previous active button
        activeButton[0].className = "story-button";                         //removes active styling

        //sets new story button to active styling
        document.getElementById(targetID).classList.remove("story-button");  //remove inactive class styling for clicked button
        document.getElementById(targetID).classList.add("active-story-button"); //adds active story styling to the clicked button

        //activates fade-in aimation for the new story
        requestAnimationFrame(()=>{
        newStory.classList.add("activate-animation");
        });
    }
}
