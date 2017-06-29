// Ruby To JS

// empty array for fleet
var cars = []

// Create a new car object
function getNewCar() {
   return { city: 'Toronto',
            passengers: 0,
            gas: 100}

}

// Add a new car to a fleet
function addCar(cars,newCar) {
cars.push(newCar);
return "Adding new car to fleet. Fleet size is now "+ cars.length + ".";
}


function pickUpPassenger(car) {
 car.passengers += 1;
 car.gas -= 10;
 return "Picked up passenger. Car now has " + car.passengers + " passengers.";

}

function getDestination(car) {
  if (car.city === 'Toronto'){
        return 'Mississauga';
  } else if (car.city === "Mississauga") {
        return 'London';
  } else if (car.city === 'London') {
        return 'Toronto';
  }
}

function fillUpGas(car) {
  oldGas = car.gas;
  car.gas = 100;
  return "Filled up to " + getGasDisplay(car.gas) + " on gas from " + getGasDisplay(oldGas) + "."
}

function getGasDisplay(gasAmount) {
  return gasAmount
}

function drive(car, cityDistance) {
  if (car.gas < cityDistance){
    return fillUpGas(car);
  }

  car.city = getDestination(car);
  car.gas -= cityDistance;
  return "Drove to " + car.city + ". Remaining gas: " + getGasDisplay(car.gas);
}

function dropOffPassengers(car) {
  previousPassengers = car.passengers;
  car.passengers = 0;
  return "Dropped off " + previousPassengers + " passengers.";

}
