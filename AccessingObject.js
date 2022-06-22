/*
Accessing Object Properties with Dot Notation

There are two ways to access the properties of an object: dot
notation (.) and bracket notation ([]), similar to an array.

Dot notation is what you use when you know the name of the
property you're trying to access ahead of time.

Challenge:
Read in the property values of testObj using dot notation. Set the
variable hatValue equal to the object's property hat and set the
variable shirtValue equal to the object's property shirt.
*/

// setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats",
};

const hatValue = testObj.hat;
const shirtValue = testObj.shirt;