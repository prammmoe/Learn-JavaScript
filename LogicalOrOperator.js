/*
Comparisons with the Logical Or Operator

Combine the two if statements into one statement which
returns the string Outside if val is not between 10 and
20, inclusive. Otherwise, return the string Inside.
*/

function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";;
}

testLogicalOr(15);