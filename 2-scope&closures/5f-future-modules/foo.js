var bar = require('./bar');

var hungry = "hippo"

function awesome() {
    return bar.hello(hungry).toUpperCase()
}

module.exports = {awesome: awesome}