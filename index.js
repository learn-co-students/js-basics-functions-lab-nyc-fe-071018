// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  return Math.abs(42 - someValue);
}

function distanceFromHqInFeet(someValue) {
  return (distanceFromHqInBlocks(someValue) * 264)
}

function distanceTravelledInFeet(someValue, anotherValue) {
  return (Math.abs(someValue-anotherValue) * 264);
}

function calculatesFarePrice(someValue, anotherValue) {
    let distance = distanceTravelledInFeet(someValue, anotherValue);
    switch (true){
      case (distance<=400):
        return 0;
      case (distance <= 2000):
        return ((distance - 400) * .02);
      case ((distance > 2001) && (distance <= 2500)):
        return 25;
      case (distance >= 2500):
        return 'cannot travel that far';
      }
}