/*
Use Conditional Logic with If Statements

Create an if statement inside the function to return "Yes, that was true"
if the parameter wasThatTrue is true and return "No, that was false" otherwise.
*/

function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if (wasThatTrue) {
        return "Yes, that was true";
    } else {
        return "No, that was false";
    }
}

trueOrFalse(true);
trueOrFalse(false);