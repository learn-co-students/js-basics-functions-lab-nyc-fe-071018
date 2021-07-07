// Code your solution in this file!
function distanceFromHqInBlocks(location){
	let NumberOfBlocks =  Math.abs(42-location);
	return NumberOfBlocks;

}

function distanceFromHqInFeet(location){
	let distanceInFeet = ((distanceFromHqInBlocks(location))*264);
	return distanceInFeet;
	
}

function distanceTravelledInFeet(start,end){
	let x= Math.abs(end-start);
	let distanceTravelled = x*264;
	return distanceTravelled;
}

function calculatesFarePrice(start, end){
	let distance = distanceTravelledInFeet(start,end);
	let fare;
	if  (distance <=400){
	  fare=0;
		return fare;
	} else if (distance>400 && distance<2000)
	{
		fare = (distance-400)*0.02;
		return fare;
	} else if (distance>=2001 && distance<=2500)
	{
	 fare = 25;
		return fare;
	} else if (distance>2500)
	{
		return 'cannot travel that far';
	}

}