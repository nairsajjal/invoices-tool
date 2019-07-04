var qt = document.getElementById("qt");
var ra = document.getElementById("ra");
var am = document.getElementById("am");

qt.addEventListener("input", amount_sum);
ra.addEventListener("input", amount_sum);

function amount_sum(){
    var quantity = parseFloat(qt.value) || 0;
    var rate = parseFloat(ra.value) || 0;
    var amount= quantity * rate;

    am.innerHTML=""+amount;
}