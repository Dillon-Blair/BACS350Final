const prompt = require("prompt-sync")();

function bmiCalculator() {
    var weight;
    var height;

    weight = prompt("Enter your weight in kilograms (1) or lbs (2): ");

    while(weight != 1 && weight != 2) {
        
        weight = prompt("Invalid input, please enter 1 or 2: ");
    }

    if (weight == 1) {
        weight = prompt("Enter your weight in kgs: ");
        while (weight < 0) {
            weight = prompt("Please enter a valid number: ");
        }
    }
    else if (weight == 2) {
        weight = prompt("Enter your weight in lbs: ");
        while (weight < 0) {
            weight = prompt("Please enter a valid number: ");
        }
        weight = weight / 2.205;
    }


    height = prompt("Enter your height in meters (1) or inches (2): ");
    while(height != 1 && height != 2) {


        height = prompt("Invalid input, please enter 1 or 2: ");
        
    }

    if (height == 1) {
        height = prompt("Enter your height in meters: ");
        while (height < 0) {
            height = prompt("Please enter a valid number: ");
        }
    }
    else if (height = 2) {
        height = prompt("Enter your height in inches: ");
        while (height < 0) {
            height = prompt("Please enter a valid number: ");
        }
        height = height / 39.37;
    }
    var BMI = (weight / height)**2;
    return BMI; 
    console.log("Your BMI is " + BMI);
}

var result = bmiCalculator();
let bmis = [result]; 

var cont = prompt("Would you like to continue, enter (1) for yes & (0) for no?");
while (cont == 1) {
    result = bmiCalculator();
    bmis.push(result);
    cont = prompt("Would you like to continue, enter (1) for yes & (0) for no?");
}
for (let i = 0; i < bmis.length; i++) {
    console.log(bmis[i]);
    //done
}
