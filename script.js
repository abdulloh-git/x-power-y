do {
    var first = +prompt(" Enter the first number");
    var second = +prompt(" Enter the second number");
    if (isNaN(first) || isNaN(second) || first <= 0 || second <= 0) {
        alert("Enter valid positive numbers");
    }   
 } while (isNaN(first) || isNaN(second) || first <= 0 || second <= 0);

answer = 1;

 for (let i = 1; i <= second; i++) {
    answer = answer * first;
    console.log(answer);
 }