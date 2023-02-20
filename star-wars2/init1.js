const stars = 400

for (let i =0; i < stars; i++) {
    let star = document.createElement("div")
    star.className = 'stars'
    var xy = randomPosition();
    star.style.top = xy[0] + 'px'
    star.style.left = xy[1] + 'px'
    document.body.append(star)
}

function randomPosition() {
    var y = window.innerWidth
    var x = window.innerHeight
    var randomX = Math.floor(Math.random() * x)
    var randomY = Math.floor(Math.random() * y)
    return [randomX, randomY]
}

  function showBuyNow() { 
    location.replace("./template.html") 
}
setTimeout("showBuyNow()", 35000);

            
function myFunction2() {
              document.getElementById("demo1").innerHTML = "During his peak, Vader was Unstoppable";
            }

function myFunction1() {
              document.getElementById("demo").innerHTML = "Darth Vader was the most powerful Sith lord";
            }

function myFunction3() {
              document.getElementById("demo2").innerHTML = "Vader asserted dominance";
            }
           
           
var heading=document.getElementById("myheading");
heading.addEventListener("mouseover",function() {
    heading.style.color="red";

});
heading.addEventListener("mouseout",function() {
    heading.style.color="white";
    
});

var theme=document.getElementById("vader-theme")
function playmusic() { 
  theme.play(); 
} 

function stopmusic() { 
  theme.pause(); 
} 