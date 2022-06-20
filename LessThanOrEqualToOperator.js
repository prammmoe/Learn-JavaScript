/*
Comparison with the Less Than Or Equal To Operator

Add the less than or equal to operator to the indicated lines so that the return statements make sense.
*/

function testLessThanOrEqual(val) {
    if (val <= 12) {
        return "Smaller Than or Equal to 12";
    }
    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}

testLessThanOrEqual(10);