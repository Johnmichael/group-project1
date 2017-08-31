var nameArray = [];
var costArray = [];



    function addName() {
      var check;
      check = document.getElementById("inputName").value;
      if (check == "") {
        alert("Please enter a name");
        return false;
      }

      var x = document.getElementById("boxNames");
      nameArray.push(document.getElementById("inputName").value);
      x.innerHTML = nameArray.join('<br/>');
    }

    function removeName() {
      var x = document.getElementById("boxNames");
      nameArray.pop(document.getElementById("inputName").value);
      x.innerHTML = nameArray.join('<br/>');
    }

    function addFoodItem() {
      var check;
      check = document.getElementById("inputCost").value;
      if (check == "" || check < 0) {
        alert("Please enter a number greater than 0");
        return false;
      }
      var y = document.getElementById("boxCost");
      costArray.push(document.getElementById("inputCost").value);
      y.innerHTML = costArray.join('<br/>');
    }

    function removeFoodItem() {
      var y = document.getElementById("boxCost");
      costArray.pop(document.getElementById("inputCost").value);
      y.innerHTML = costArray.join('<br/>');
    }

    function subTotal(total, num) {
      return total + Math.round(num);
    }

    function addTip(subtotal) {
      var check;
      check = document.getElementById("inputTip").value;
      if (check == "" || check < 0) {
        alert("Please enter a tip equal to or greater than 0");
        return false;
      }
      var theTip = ((document.getElementById("inputTip").value));
      return accounting.toFixed((subtotal * theTip), 2);


    }

    function addTax(subtotal) {
      var check;
      check = document.getElementById("inputTax").value;
      if (check == "" || check < 0) {
        alert("Please enter a tax rate equal to or greater than 0");
        return false;
      }
      var theTax = ((document.getElementById("inputTax").value));
      return accounting.toFixed((subtotal * theTax), 2);


    }

    function truncate(num, decimal) {
      decimal = 2;
      return accounting.toFixed(num, decimal);
    }

    function splitTheBill(item) {
      priceOfMeal = costArray.reduce(subTotal, 0);
      beforeTipandTax = (costArray.reduce(subTotal, 0) / nameArray.length);
      priceOfMealSplit = truncate(beforeTipandTax);
      tipAmount = addTip(beforeTipandTax) / 100;
      taxAmount = addTax(beforeTipandTax) / 100;
      grossTotal = truncate(beforeTipandTax + taxAmount + tipAmount);
      grandTotal = document.getElementById("priceOfMeal").innerHTML = "$" + priceOfMeal;
      document.getElementById("cost-of-food").innerHTML = "$" + priceOfMealSplit;
      document.getElementById("tip").innerHTML = "$" + truncate(tipAmount);
      document.getElementById("tax").innerHTML = "$" + truncate(taxAmount);
      document.getElementById("sumTotal").innerHTML = "$" + grossTotal;


    }
