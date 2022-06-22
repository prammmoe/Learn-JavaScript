/*
Build JavaScript Objects

Objects are similar to arrays, except that instead of using indexes
to access and modify their data, you access the data in objects
through what are called properties.

Objects are useful for storing data in structured way, and can
represent real world objects, like a cat.

Challenge:
Make an object that represents a dog called myDog which contains
the properties name (a string), legs, tails, and friends.

You can set these object properties to whatever values you want, as
long as name is a string, legs, and tails are numbers, and 
friends is an array.
*/

const myDog = {
    "name": "Bruno",
    "legs": 4,
    "tails": 1,
    "friends": ["Jetski", "Jay"]
};

console.log(myDog.friends[1]);