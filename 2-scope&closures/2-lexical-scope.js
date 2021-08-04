function foo(str, b) {
    eval(str) // evaluate str at runtime (possibily declaring new varibale / function)
    console.log(a, b)
}

foo("var a = 4;", 8) // works only if 1. using var instead of let 2. not using strict MODE

// eval() and with() are poor options performance wise. Declaring at run time miss some js engine optimizations