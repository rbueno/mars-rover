// Rover Object Goes Here
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [0,0]
};

function goMyRover() {
  let commands = "rffrfflfrff";
  for (var i = 0; i < commands.length; i++) {
      switch (commands[i]) {
        case "f":
          moveForward();
          break;
        case "r":
          turnRight();
          break;
        case "l":
          turnLeft();
          break;
      }
    }
  }

// ======================
function turnLeft(){
  console.log("turnLeft was called!");

  switch (rover.direction){

    case "N":
      rover.direction = "W";
      break;

    case "S":
      rover.direction = "E";
      break;

    case "W":
       rover.direction = "S";
      break;

    case "E":
        rover.direction = "N";
      break;

  }

}

function turnRight(){
  console.log("turnRight was called!");

  switch (rover.direction){

    case "N":
      rover.direction = "E";
      break;

    case "S":
      rover.direction = "W";
      break;

    case "W":
       rover.direction = "N";
      break;

    case "E":
        rover.direction = "S";
      break;

  }

}

function moveForward(){
  console.log("moveForward was called")

  switch (rover.direction){

    case "N":
      rover.y--;
      break;

    case "S":
      rover.y++;
      break;

    case "W":
       rover.x--
      break;

    case "E":
        rover.x++;
      break;

  }
  rover.travelLog.push = ([rover.x,rover.y]);
  console.log(`Rover position is: ${rover.x}, ${rover.y}`);
  
}

