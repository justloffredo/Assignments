const Elevator = require("./elevator");
const Passenger = require("./passenger");

const elevator = new Elevator();
let passengers = [new Passenger("Justin", 5), new Passenger("Erin", 4), new Passenger("Brian", 3)];
let name = Passenger.name;
let floor = Passenger.desiredFloor;

function loadElevator() {
	elevator.loadPassenger(passengers.pop());
}

function unloadElevator() {
	elevator.unloadPassenger();
}


elevator.on("up", function(event) {
	console.log("We're on floor " + event.currentFloor);
	if (event.currentFloor < elevator.currentPassenger.desiredFloor) {
		console.log(elevator.currentPassenger.name + " is moving up.");
	}
	if (event.currentFloor === elevator.currentPassenger.desiredFloor) {
		console.log("We're at " + elevator.currentPassenger.name + "'s floor!");
		unloadElevator();
		elevator.goDown();
	}

	else {
		elevator.goUp();
	}
});


elevator.on("down", function(event) {
	if (event.currentFloor !== 0) {
		elevator.goDown();
	}


	if (passengers.length > 0 && event.currentFloor === 0) {
		loadElevator();
		console.log(elevator.currentPassenger.name + " is now in the elevator.");
		elevator.goUp();
	}

	if (passengers.length === 0 && event.currentFloor === 0) {
		console.log("Elevator is ready");
	}
});

loadElevator();
elevator.goUp();
