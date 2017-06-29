// Ruby To JS

// empty array for fleet
var cars = []
var car = getNewCar()
// Create a new car object
function getNewCar() {
   return { city: 'Toronto',
            passengers: 0,
            gas: 100}

}

// Add a new car to a fleet
function addCar(cars,newCar) {
cars.push(newCar)
return "Adding new car to fleet. Fleet size is now "+ cars.length + "."
}


function pick_up_passenger(car) {
 car.passengers += 1;
 car.gas -= 10;
 return "Picked up passenger. Car now has " + car.passengers + " passengers."

}
