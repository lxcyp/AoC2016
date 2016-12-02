const path = require('path');
const fs = require('fs');

// Load and parse the input.
const loadFile = _ => fs.readFileSync(path.resolve(__dirname, "./input.txt")).toString().split(', ');

const directions = loadFile();

// fix the random character at the start of the first direction.
directions[0] = directions[0].slice(1);


var current_direction = 0;  // We want to bve facing North (0) initially!
var current_coordinates = [0,0]; // our starting position will always be 0,0.


function turnLeft(current_direction) {
	if (current_direction == 0) { // loop back to north
		return 3;
	}
	return current_direction-1;
}

function turnRight(current_direction) {
	if (current_direction == 3) { // loop back to north
		return 0;
	}
	return current_direction+1;
}

function main() {

	for (let x of directions) {
		if (x.charAt(0) == 'L') {
			current_direction = turnLeft(current_direction);

		}
		else current_direction = turnRight(current_direction);

		switch(current_direction) {
			case 0:
				current_coordinates[1] += parseInt(x.slice(1));
				break;
			case 1:
				current_coordinates[0] += parseInt(x.slice(1));
				break;
			case 2:
				current_coordinates[1] -= parseInt(x.slice(1));
				break;
			case 3:
				current_coordinates[0] -= parseInt(x.slice(1));
	//	console.log(current_coordinates);
		}
	}

	var distance_travelled = Math.abs(current_coordinates[0]) + Math.abs(current_coordinates[1]); // add absolute value of x to y to get taxicab distance.
	console.log("Distance travelled:"+distance_travelled);
}

main();