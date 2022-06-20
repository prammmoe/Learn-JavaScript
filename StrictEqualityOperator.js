/*
Comparison with the Strict Equality Operator

Strict Equality (===) is the counterpart to the equality operator (==).
However, unline the equality operator, which attempts to convert
bot values being compared to a common type, the strict
equality operator does not perform a type conversion.

If the values being compared have different types, they are considered
unequal, and the strict equality operator will return false.

Examples:

3 === 3 // true
3 === '3' // false

Challenge:

Use the strict equality operator in the if statement so the
function will return the string "Equal" when valis strictly equal to 7.
*/

function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

testStrict(10);


