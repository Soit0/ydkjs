function wait(message, time) {
    setTimeout(function timer(){
        console.log(message)
    }, time)
}
wait("Hello closure", 10000)
wait("First", 1000)
/* when setTimout is executed after the delay, the scope of wait isn't reopened, but setTimout still have access to the message
variable via the closure */