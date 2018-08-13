// Code your solution in this file!
function distanceFromHqInBlocks(block){
  if(block<42){
    return 42-block;
  }
  else if(block>42){
    return block-42;
  }
}

function distanceFromHqInFeet(block){
  if(block>42){
    return (block - 42)*264;
  }
  else if(block<42){
    return (42-block)*264;
  }
  
}

function distanceTravelledInFeet(block1, block2){
  if(block1>block2){
    return (block1 - block2)*264;
  }
  else if(block2>block1){
    return (block2 - block1)*264;
  }
  
}

function calculatesFarePrice(block1, block2){
  let feet;
  
  if(block1>block2){
      feet= (block1 - block2)*264;
  }
  else if(block2>block1){
    feet = (block2 - block1)*264;
  }
  
  if(feet < 400){
    return 0;
  }
  else if(feet > 400 && feet < 2000){
    return (feet - 400)*0.02;
  }
  else if(feet > 2000 && feet < 2500){
    return 25;
  }
  else if(feet > 2500){
    return 'cannot travel that far';
  }
  
}