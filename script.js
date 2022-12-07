document.onload(() => {
    p = document.getElementById("test-p");
})

counter = 0;

function test(){
    p.innerHTML = ++counter;
}