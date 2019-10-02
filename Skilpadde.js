var turtlepos = 225;
var hastighet = 50;

var bottles = [];

//Prevents turtle from moving more than once per cycle
var run = true;

//Checks if key is pressed down
document.addEventListener("keydown", move);

setInterval(main, hastighet);

function main() {

  //Makes the canvas object workable
  var ctx = document.getElementById("brett").getContext("2d");
  ctx.fillStyle = "#2acaff";
  ctx.fillRect(0, 0, 500, 800);
  //Fetches the images
  var turtle = document.getElementById("turtle");
  var bottle = document.getElementById("plast2");
  //places the turtle
  ctx.drawImage(turtle, turtlepos, 750);

  //checks if there are any bottles on the board
  var tall = Math.random();
  if (tall > 0.95){
    bottles.push(makeBottle());
  }

  //Moves bottles down
  for (var i = 0; i < bottles.length; i++) {
    ctx.drawImage(bottle, bottles[i][0], bottles[i][1]);
    bottles[i][1] += 5;

  }

  //Checks if bottles hit bottom
  for (var i = 0; i < bottles.length; i++) {
    if (bottles[i][1] > 750) {
      bottles.splice(i, 1);
    }
  }


  //Prevents turtle from moving more than once per cycle
  run = true;
}

//Handles turtle movement
function move(e){
  var key = e.keyCode;

  if (key == 37 && run == true) { //Handles left key
    turtlepos -= 5;
    run = false;
  }
  else if (key == 39 && run == true) { //Handles right key
    turtlepos += 5;
    run = false;
  }
}

//Creates coordinates for bottle
function makeBottle(){
   return [Math.floor(Math.random()*450), 0];
}
