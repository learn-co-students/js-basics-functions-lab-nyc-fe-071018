// Code your solution in this file!
function distanceFromHqInBlocks (block){
  return Math.abs(block - 42);
}

function distanceFromHqInFeet (block) {
  return (Math.abs(block - 42) * 264)
}

function distanceTravelledInFeet (start, destination){
  let distance = Math.abs((start - destination) * 264)
  return distance
}

function calculatesFarePrice (start, destination){
  if (distanceTravelledInFeet(start, destination) < 400) {
    return 0
  } else if (distanceTravelledInFeet(start, destination) >= 400 && distanceTravelledInFeet(start, destination) < 2000) {
    return .02 * (distanceTravelledInFeet(start, destination) - 400)
  } else if (distanceTravelledInFeet(start, destination) >= 2000 && distanceTravelledInFeet(start, destination) < 2500) {
    return 25
  } else {
      return 'cannot travel that far';
  }
}