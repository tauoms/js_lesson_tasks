/*
Create a program getTemperature that asks the user to input a temperature in Celsius and then outputs whether they should wear a jacket (if the temperature is below 15°C) or not.
 */
function getTemperature (tempCelsius) {
    if (tempCelsius < 15) 
    return console.log('The temperature is below 15°C, you should wear a jacket.')
    else return console.log('The temperature is above 15°C, no need for a jacket!')
}

getTemperature(Number(prompt('What is the current temperature?')));
