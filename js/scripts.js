var nameArray = [];
var costArray = [];


function addName() {
  var x = document.getElementById("box");
  nameArray.push(document.getElementById("inputName").value);
  x.innerHTML = nameArray.join('<br/>');
}

function addFoodItem() {
  var y = document.getElementById("boxCost");
  costArray.push(document.getElementById("inputCost").value);
  y.innerHTML = costArray.join('<br/>');

}

function totalCost(total, num) {
    return total + Math.round(num);
}

function splitTheBill(item) {
    document.getElementById("sumTotal").innerHTML = ((costArray.reduce(totalCost, 0)/nameArray.length));
}
