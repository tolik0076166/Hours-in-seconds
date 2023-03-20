//I ask the user how many hours
let HOURS = prompt('How many hours?');

//Convert the entered data into a number
HOURS = Number(HOURS);

//I count how many seconds there are in this number of hours and write the calculated value to a variable
let SECONDS = HOURS * 60;

//Display the results using an alert
alert(`${HOURS} hours is ${SECONDS} seconds`);