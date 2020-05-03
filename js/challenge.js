document.addEventListener("DOMContentLoaded", function(){
    // accessing the counter element
    const myTimer = document.getElementById('counter');
    // setting timer value
    let timerValue = 0;
    // setting counter functions/ ability to increment:
    // "As a user, I should see the timer increment every second once the page has loaded."
    let timeCounter = window.setInterval(incrementNumber, 500);
    const minusBtn = document.getElementById("minus");
    const pauseBtn = document.getElementById("pause");
    const plusBtn = document.getElementById("plus");
    const likeList = document.querySelector("ul.likes");
    const heartBtn = document.getElementById("heart");
    const commentBtn = document.getElementById("submit");

    const newCommentForm = document.getElementById("comment-form");
    newCommentForm.addEventListener("submit", createNewComment);
    

    // function that actually increments the counter
    function incrementNumber(){
        myTimer.innerText = timerValue;
        timerValue++;
    }

    // function that pauses/resumes the counterTime
    pauseBtn.addEventListener("click", function(){
        if ( pauseBtn.innerText === "pause"){
            window.clearInterval(timeCounter);
            pauseBtn.className = 'paused';
            pauseBtn.innerText = 'resume';
            minusBtn.disabled = true;
            plusBtn.disabled = true;
            heartBtn.disabled= true;
            commentBtn.disabled= true;
        }
        else {
            timeCounter = window.setInterval(incrementNumber, 500);
            pauseBtn.className = 'running';
            pauseBtn.innerText = 'pause';
            minusBtn.disabled = false;
            plusBtn.disabled = false;
            heartBtn.disabled= false;
            commentBtn.disabled= false;
        }

    });

    // User can manually increment/decrement the counter using the plus and minus buttons.
    minusBtn.addEventListener("click",function(){
        timerValue -= 1;
        myTimer.innerText = timerValue;
    });
    
    plusBtn.addEventListener("click", function(){
        timerValue += 1;
        myTimer.innerText = timerValue;
    });

    // User can 'like' an individual number of the counter.
    // TODO: I should see count of the number of 'likes' associated with that number.
    heartBtn.addEventListener("click", function(event){
        // create li to add the "this has been liked" feature
        let likeListItem = document.createElement("li");
        let heartNum = myTimer.innerText + " has been liked 1 time";
        likeListItem.innerText = heartNum;
        // add this inner text into the ul.likes section, right about comments
        likeList.appendChild(likeListItem);
        //print
        console.log(event);
    });

    //adding comments
    function createNewComment(e){
        e.preventDefault();
        let newComment = document.createElement("p");
        newComment.innerText = document.getElementById("comment-input").value;
        
        const appendNewComment = document.getElementById("list")
        appendNewComment.appendChild(newComment);
        e.target.reset();

    };

});


/*
"use strict";function _toConsumableArray(a){
    if(Array.isArray(a)){
        for(var b=0,c=Array(a.length);
        b<a.length;
        b++)c[b]=a[b];
        return c
    }
    return Array.from(a)
}
    var playing=!0,timer=function(){
            return setInterval(function(){
                var a=document.getElementById("counter")
                b=parseInt(a.innerText);
                a.innerText=b+1},1e3)
            }
            interval=timer()
            minus=document.getElementById("minus")
            plus=document.getElementById("plus")
            heart=document.getElementById("heart")
            pause=document.getElementById("pause")
            commentForm=document.getElementsByTagName("form")[0];

    minus.addEventListener("click",function(){
        var a=document.getElementById("counter")
        b=parseInt(a.innerText);
        a.innerText=b-1}),plus.addEventListener("click",function(){var a=document.getElementById("counter"),b=parseInt(a.innerText);
        a.innerText=b+1})
        
        heart.addEventListener("click",function(){
            var a=document.getElementById("counter")
            b=parseInt(a.innerText)
            c=document.querySelector(".likes")
            d=void 0;
            if([].concat(_toConsumableArray(c.children)).map(function(a){
                return parseInt(a.dataset.num)}).includes(b)){d=document.querySelector('[data-num="'+b+'"]');
            var e=parseInt(d.children[0].innerText);d.innerHTML=b+" has been liked <span>"+(e+1)+"</span> times"}else(d=document.createElement("li")).setAttribute("data-num",b),d.innerHTML=b+" has been liked <span>1</span> time",c.appendChild(d)}),pause.addEventListener("click",function(){playing?(playing=!1,clearInterval(interval),this.innerText="resume"):
        (playing=!0,interval=timer(),this.innerText="pause"),[].concat(_toConsumableArray(document.getElementsByTagName("button"))).forEach(function(a){"pause"!==a.id&&(a.disabled=!playing)})}),commentForm.addEventListener("submit",function(a){a.preventDefault();var b=this.children[0],c=b.value;b.value="";var d=document.querySelector(".comments"),e=document.createElement("p");e.innerText=c,d.appendChild(e)});
*/