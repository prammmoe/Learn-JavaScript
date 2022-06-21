/*
Multiple Identical Options in Switch Statements

If the break statement is omitted from a switch statement's
case, the following case statement(s) are executed until a break
is encountered.

Challenge:
Write a switch statement to set answer for the following ranges:
1-3 - Low
4-6 - Mid
7-9 - High

Note: You will need to have a case statement for each number in the range.
*/

function sequentialSizes(val) {
    let answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }

    return answer;
}

sequentialSizes(2);