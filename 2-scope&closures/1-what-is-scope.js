// Quiz

function foo(a) {
    var b = a
    return a + b 
}

var c = foo(2)

// LHS Look-ups : assign value 2 to variable a, assign value a to variable b, assign value of foo(2) to variable c
// RHS Look-ups : assign value 2 to function foo, find a, find a, find b

// MORAL : ALWAYS USE STRICT MODE