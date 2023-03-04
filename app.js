// Write a short program that prints each number from 1 to 100 on a new line.

// For each multiple of 3, print "Fizz" instead of the number.

// For each multiple of 5, print "Buzz" instead of the number.

// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.


// var numArray = new Array(100);
// for (i=0; i< 100; i++) {
//     numArray[i] = i+1;
// }
// for (var i=0; i < numArray.length; i++) {
//     console.log(numArray[i]);
// }

for (var i = 0; i <= 100; i++) {
    console.log(i)

    for (i = 0; i <= 100; i++) {
        if (i % 15 === 0) {
          console.log("Fizzbuzz");
            } else if ( i % 3 === 0){
                console.log("Fizz")
            } else if ( i % 5 === 0){
                console.log("Buzz")
            } 
            else {
                console.log(i);
            }
    
        }

    }

    // for loop to iterate through numbers


