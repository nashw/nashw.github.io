document.onload = function() {
    p = document.getElementById("test-p");
}

counter = 0;

function test(){
    p.innerHTML = ++counter;
}