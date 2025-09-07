do {
    var a = +prompt("Enter the first number")
    var b = +prompt("Enter the second number")
    if (isNaN(b) || isNaN(a)) {
        alert("Invalid input, please enter numeric values only")
    }else{
        var res = alert(a ** b)
    }
} while (isNaN(b) || isNaN(a));