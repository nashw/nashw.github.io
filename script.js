function hintPraline(){
    document.getElementById("hint-praline-button").setAttribute("hidden", "")
    document.getElementById("hint-praline").removeAttribute("hidden")
}

function detailsPraline(){
    document.getElementById("hint-praline").setAttribute("hidden", "")
    document.getElementById("details-praline").removeAttribute("hidden")
}

function fullPraline(){
    document.getElementById("details-praline").setAttribute("hidden", "")
    document.getElementById("full-praline").removeAttribute("hidden")
}