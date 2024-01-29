// Create a program that continuously prompts the user to input distance (in kilometers) and time (in hours) and then calculates the average speed. The program should terminate when the user enters 0 for the distance. Upon receiving a distance of 0, the program should not prompt for any further input.


let time, distance;

while (distance != 0) {
    distance = Number(prompt('Input distance (km):'));
    if (distance == 0) break;
    time = Number(prompt("Input time (h):"));
    let average = distance / time;
    console.log(`The avarage speed is: ${average.toFixed(0)} km/h`);
}