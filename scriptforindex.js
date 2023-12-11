function picforfirstcard(color)
{
    document.getElementById("projs").style.backgroundColor = color;
    document.getElementById("projectcardtwo").style.opacity = 0.3;
    document.getElementById("projectcardthree").style.opacity = 0.3;
    document.getElementById("projectcardfour").style.opacity = 0.3;
}

function picforsecondcard(color)
{
    document.getElementById("projs").style.backgroundColor = color;
    document.getElementById("projectcardthree").style.opacity = 0.3;
    document.getElementById("projectcardfour").style.opacity = 0.3;
    document.getElementById("projectcardone").style.opacity = 0.3;
}

function picforthirdcard(color)
{
    document.getElementById("projs").style.backgroundColor = color;
    document.getElementById("projectcardtwo").style.opacity = 0.3;
    document.getElementById("projectcardfour").style.opacity = 0.3;
    document.getElementById("projectcardone").style.opacity = 0.3;
}

function picforfourthcard(color)
{  
    document.getElementById("projs").style.backgroundColor = color;
    document.getElementById("projectcardtwo").style.opacity = 0.3;
    document.getElementById("projectcardthree").style.opacity = 0.3;
    document.getElementById("projectcardone").style.opacity = 0.3;
}

function normal()
{
    document.getElementById("projs").style.backgroundColor = "black";
    document.getElementById("projectcardtwo").style.opacity = 1;
    document.getElementById("projectcardthree").style.opacity = 1;
    document.getElementById("projectcardfour").style.opacity = 1;
    document.getElementById("projectcardone").style.opacity = 1;
}

document.getElementById("projectcardone").addEventListener("mouseenter", function() {picforfirstcard('rgb(204, 0, 255)')});
document.getElementById("projectcardtwo").addEventListener("mouseenter", function() {picforsecondcard('rgb(0, 200, 255)')});
document.getElementById("projectcardthree").addEventListener("mouseenter", function() {picforthirdcard('rgb(0, 255, 170)')});
document.getElementById("projectcardfour").addEventListener("mouseenter", function() {picforfourthcard('rgb(255, 162, 0)')});
document.getElementById("projectcardone").addEventListener("mouseleave", normal);
document.getElementById("projectcardtwo").addEventListener("mouseleave", normal);
document.getElementById("projectcardthree").addEventListener("mouseleave", normal);
document.getElementById("projectcardfour").addEventListener("mouseleave", normal);