// TODO -
// "Click to show details" from pizza project
//  Add Tip and Tax Functionality.
// truncate all entries
// Prevent blank entries from joining innerHTML of diner

var nameArray = [];
var costArrayDiner1 = [];
var costArrayDiner2 = [];
var costArrayDiner3 = [];




  $(document).ready(function(){
       $("#d1name").keyup(function(){
           d1namebottom = ($(this).val())
          $("#person1").text(d1namebottom)
       });
       $("#d2name").keyup(function(){
           d2namebottom = ($(this).val())
          $("#person2").text(d2namebottom)
       });
       $("#d3name").keyup(function(){
           d3namebottom = ($(this).val())
           $("#person3").text(d3namebottom)


       });

   })

  function addFoodItemDiner1() {
    var y = document.getElementById("diner1CurrentTotal");
    costArrayDiner1.push(document.getElementById("d1f1").value);
    costArrayDiner1.push(document.getElementById("d1f2").value);
    costArrayDiner1.push(document.getElementById("d1f3").value);
    costArrayDiner1.push(document.getElementById("d1f4").value);
    y.innerHTML = costArrayDiner1.join('<br/>');


    var beforeTipandTax = costArrayDiner1.reduce(subTotal, 0);
    var z = document.getElementById("diner1Total");
    z.innerHTML = ('$')+costArrayDiner1.reduce(subTotal, 0);

}



  function addFoodItemDiner2() {
    var y = document.getElementById("diner2CurrentTotal");
    costArrayDiner2.push(document.getElementById("d2f1").value);
    costArrayDiner2.push(document.getElementById("d2f2").value);
    costArrayDiner2.push(document.getElementById("d2f3").value);
    costArrayDiner2.push(document.getElementById("d2f4").value);
    y.innerHTML = costArrayDiner2.join('<br/>');

    var z = document.getElementById("diner2Total");
    z.innerHTML = ('$')+costArrayDiner2.reduce(subTotal, 0);
  }
  function addFoodItemDiner3() {
    var y = document.getElementById("diner3CurrentTotal");
    costArrayDiner3.push(document.getElementById("d3f1").value);
    costArrayDiner3.push(document.getElementById("d3f2").value);
    costArrayDiner3.push(document.getElementById("d3f3").value);
    costArrayDiner3.push(document.getElementById("d3f4").value);
    y.innerHTML = costArrayDiner3.join('<br/>');

    var z = document.getElementById("diner3Total");
    z.innerHTML = ('$')+costArrayDiner3.reduce(subTotal, 0);
  }
    function addName() {
      var check;
      check = document.getElementById("inputName").value;
      if (check == "") {
        alert("Please enter a name");
        return false;
      };

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
      };
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
      };
      var theTip = ((document.getElementById("inputTip").value))
      return accounting.toFixed((subtotal * theTip), 2)


    }

    function addTax(subtotal) {
      var check;
      check = document.getElementById("inputTax").value;
      if (check == "" || check < 0) {
        alert("Please enter a tax rate equal to or greater than 0");
        return false;
      };
      var theTax = ((document.getElementById("inputTax").value))
      return accounting.toFixed((subtotal * theTax), 2)


    }

    function truncate(num, decimal) {
      decimal = 2
      return accounting.toFixed(num, decimal);
    }


    // OLD
    // function splitTheBill(item) {
    //   priceOfMeal = costArray.reduce(subTotal, 0);
    //   beforeTipandTax = (costArray.reduce(subTotal, 0) / nameArray.length);
    //   priceOfMealSplit = truncate(beforeTipandTax)
    //   tipAmount = addTip(beforeTipandTax) / 100
    //   taxAmount = addTax(beforeTipandTax) / 100
    //   grossTotal = truncate(beforeTipandTax + taxAmount + tipAmount);
    //   grandTotal = document.getElementById("priceOfMeal").innerHTML = "$" + priceOfMeal
    //   document.getElementById("cost-of-food").innerHTML = "$" + priceOfMealSplit
    //   document.getElementById("tip").innerHTML = "$" + truncate(tipAmount)
    //   document.getElementById("tax").innerHTML = "$" + truncate(taxAmount)
    //   document.getElementById("sumTotal").innerHTML = "$" + grossTotal;
    //
    //
    // };

  function splitTheBill(item) {
    d1=costArrayDiner1.reduce(subTotal, 0);
    d2=costArrayDiner2.reduce(subTotal, 0);
    d3=costArrayDiner3.reduce(subTotal, 0);
    costArray = d1+d2+d3
    document.getElementById("billSplit").innerHTML = "$" + truncate(costArray/3, 0)

  }
