console.log("Loop printing only 6 because var i goes to value 6 way before the timeout function is called");
for (var i = 0; i <= 5; i++) {
    setTimeout(function() {console.log(i)}, i*1000)
}
setTimeout(function() {console.log('Loop printing 0,1,2.. because every iteration has a closure over a different var i')}, 6000)
for(var i = 0; i < 6; i++) {
    (function(j) { 
        setTimeout(function(){
            console.log(j)
        }, 7000 + i * 1000)
    })(i)
}
setTimeout(function() {console.log('Loop also working because let is creating a new scope at every iteration')}, 14000)
for(let i = 0; i < 6; i++) {
    setTimeout(function(){
        console.log(i)
    }, 14000 + i * 1000)
}