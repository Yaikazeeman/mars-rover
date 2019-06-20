
var rover {
  direction: "N",
  x: 0,
  y: 0
};

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      console.log("Rover is now facing west");
      [break;]
    case "E":
      rover.direction = "N";
      console.log("Rover is now facing North");
      [break;]
    case "S":
      rover.direction = "E";
      console.log("Rover is now facing East");
      [break;]
    case "W":
        rover.direction = "S";
      console.log("Rover is now facing South");
      [break;]
    default:
      console.log("invalid value");
      [break;]
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      console.log("Rover is now facing East");
      [break;]
    case "E":
      rover.direction = "S";
      console.log("Rover is now facing South");
      [break;]
    case "S":
      rover.direction = "W";
      console.log("Rover is now facing West");
      [break;]
    case "W":
      rover.direction = "N";
      console.log("Rover is now facing North");
      [break;]
    default:
      console.log("invalid value");
      [break;]
  }
}

function moveForward(rover){
  console.log("moveForward was called")
  switch (rover.direction) {
    case "N":
      rover.y = + 1;
      console.log("rover is at " + rover.x + rover.y);
      [break;]
    case "E":
      rover.x = + 1;
      console.log("rover is at " + rover.x + rover.y);
      [break;]
    case "S":
      rover.y = - 1;
      console.log("rover is at " + rover.x + rover.y);
      [break;]
    case "W":
      rover.x = - 1;
      console.log("rover is at " + rover.x + rover.y);
      [break;]
    default:
      console.log("invalid value");
      [break;]
  }
}

var commands = "rffrfflfrff"

for (i = 0; i < commands.length; i++ ){
  if (commands[i] == "r") {
    turnRight();
  }if else (commands[i] == "l") {
    turnLeft();
  }if else (commands[i] == "f") {
    moveForward();
  }else{
    console.log("invalid value");
  }
}

