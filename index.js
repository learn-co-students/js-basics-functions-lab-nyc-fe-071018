// Code your solution in this file!
function distanceFromHqInBlocks(distination){
  if(distination < 42){
    return  (42-distination)
  }else{
    return (distination - 42)
  }
}

function distanceFromHqInFeet(distination){
  let blocks = distanceFromHqInBlocks(distination)
  return blocks*264
}

function distanceTravelledInFeet(startingBlock,endingBlock){
  if(startingBlock > endingBlock){
    return (startingBlock - endingBlock)*264
  }else{
     return (endingBlock - startingBlock)*264
  }
}

function calculatesFarePrice(startingBlock,endingBlock){
  let dInf = distanceTravelledInFeet(startingBlock, endingBlock)
  if(dInf < 2000){
    if(dInf<400){
        return 0
    }
    let distanceToPayForInFeet = dInf - 400
    return distanceToPayForInFeet*0.02
  }else if (dInf > 2000 && dInf < 2500){
    return 25
  }else{
    return 'cannot travel that far'
  }
}

 

