

const print = require("./printShape");
console.log("This will print 10 Triangles, 10 squares and 10 rhombi ")
var i = 1; 
var k = 2;
var j = 2;
//For Printing 10 triangles

while(i<11) {
    // genrates random numbers between 9 and 1
    lines = Math.floor(Math.random() * (9 - 1 + 1) + 1);

    // calls traingle method from printShape module

    print.triangle(lines);
    
    console.log("\n");
    i = i + 1;
}

//For Printing 10 squares

while(j<12) {
    //generates random numbers between 9 and 2
    lines = Math.floor(Math.random() * (9 - 2 + 1) + 2);

    // calls traingle method from printShape module
    print.square(lines);
    
    console.log("\n");
    j = j + 1;
}

// For Printing 10 rhombi

while (k < 22) {
    //generates random even numbers 
    lines = (Math.floor(Math.random() * (9 - 1 + 1) + 1) * 2);

    // calls traingle method from printShape module
    print.rhombus(lines);
    
    console.log("\n");
    k= k + 2;
}

