/*
Comparison with the Greater Than Or Equal To Operator

Add the greater than or equal to operator to the indicated lines so that the return statements make sense.
*/

function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or over";
    }

    if (val >= 10) {
        return "10 or over";
    }
    return "Less than 10";
}

testGreaterOrEqual(10);