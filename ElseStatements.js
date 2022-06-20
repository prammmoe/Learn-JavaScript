/*
Introducing Else Statements 

When a condition for an if statement is true, the block
of code following is executed. Whta about 
*/

function testElse(val) {
    let result = "";
    // Only change code below this line

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }

    return result;
}

testElse(4);