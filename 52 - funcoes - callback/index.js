// Um codigo dentro do outro
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num)
}

function f1(callback) {
    setTimeout(function() {
        console.log('f1')
        if (callback) callback()
    }, rand())
    
}

function f2(callback) {
    setTimeout(function() {
        console.log('f2')
        if (callback) callback()
    }, rand())
}

function f3(callback) {
    setTimeout(function() {
        console.log('f3')
        if (callback) callback()
    }, rand())
}

f1(function() { // Callback
    f2(function() {
        f3(function(){
            console.log('Hello World!')
        })
    })
})

f1()
f2()
f3()